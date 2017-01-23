import pandas
from django.db import connection
from student.ontrack import gpa_subjects_list, getPoints, getOnTrack

def hr_data(hr):
    hr_grades_sql = "SELECT grade, MAX(grade_date) as recent_grade_date, display_name, \
    student_roster.student_id FROM student_roster, student_grade, student_subject \
    WHERE hr_id='%s' AND  \
    student_grade.student_id=student_roster.student_id AND  \
    student_subject.subject_name=student_grade.subject \
    GROUP BY student_roster.student_id, student_grade.subject"%(hr)

    hr_grades_df = pandas.read_sql(hr_grades_sql, con=connection)

    hr_grades_wide=hr_grades_df.pivot(index='student_id', columns='display_name', values='grade')
    hr_grades_indexed = hr_grades_wide.reset_index()

    #calc GPA
    df_current_core_grades = hr_grades_df[hr_grades_df["display_name"].isin(gpa_subjects_list)]
    df_core_grades_indexed=df_current_core_grades.pivot(index='student_id', columns='display_name', values='grade')
    df_points=df_core_grades_indexed.applymap(getPoints)

    df_points['gpa']=df_points.mean(axis=1)
    df_points=df_points.reset_index()
    gpa_df=df_points[['student_id', 'gpa']]

    #get attendance
    #multiply days by 1.0 to coerce into float
    hr_attend_sql = "SELECT  total_days, absent_days, \
    ((total_days-absent_days)/ (total_days*1.0))*100  as attend_pct, \
    MAX(attend_date) as recent_attend_date, student_roster.student_id \
    from student_roster, student_attendance \
    WHERE hr_id='%s' AND student_attendance.student_id = student_roster.student_id \
    GROUP BY student_roster.student_id"%(hr)


    hr_attend_df = pandas.read_sql(hr_attend_sql, con=connection)
    hr_attend_df = hr_attend_df[["student_id", "attend_pct"]]

    #get names
    hr_name_sql = "SELECT  first_name, last_name, student_roster.student_id \
    from student_roster, student_student \
    WHERE hr_id='%s' AND student_student.student_id = student_roster.student_id "%(hr)

    hr_name_df= pandas.read_sql(hr_name_sql, con=connection)


    #merge them all together (but maybe refactor to just send as separate dictionaries?)
    hr_data=hr_attend_df.merge(hr_grades_indexed, on="student_id")
    hr_data=hr_data.merge(gpa_df, on="student_id")
    hr_data=hr_data.merge(hr_name_df, on="student_id")

    #calc ontrack
    hr_data["onTrack"] = hr_data.apply(lambda hr_data: getOnTrack(hr_data["attend_pct"], hr_data["gpa"]), axis=1)

    #round gpa and Attendance
    hr_data.attend_pct = hr_data.attend_pct.round()
    hr_data.gpa = hr_data.gpa.round(2)

    #sort by ontrack
    hr_data=hr_data.sort_values(by='onTrack').reset_index()

    #get dictionary
    hr_dict=hr_data.to_dict('index')
    return(hr_dict)
