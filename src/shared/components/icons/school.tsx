import * as React from "react";

interface SchoolIconProps {
  width: string
  height: string
  color?: string
}

const SchoolIcon: React.SFC<SchoolIconProps> = (props) => {
  return (
    <svg 
      width={props.width} 
      height={props.height} 
      fill={props.color} 
      xmlns="http://www.w3.org/2000/svg" 
      x="0px" 
      y="0px"
      viewBox="0 0 470 470"
    >
      <path stroke="#eee" stroke-width="100" d="M462.5,240H360v-53.5c0-0.277-0.017-0.55-0.047-0.819c-0.007-0.067-0.021-0.132-0.03-0.198 c-0.028-0.204-0.06-0.407-0.104-0.606c-0.017-0.075-0.038-0.148-0.057-0.222c-0.048-0.188-0.1-0.374-0.162-0.557 c-0.026-0.077-0.055-0.152-0.083-0.227c-0.066-0.176-0.137-0.348-0.215-0.517c-0.036-0.077-0.072-0.153-0.11-0.228 c-0.083-0.164-0.172-0.323-0.266-0.48c-0.044-0.073-0.087-0.147-0.133-0.219c-0.104-0.16-0.215-0.313-0.33-0.464 c-0.046-0.061-0.089-0.124-0.137-0.183c-0.166-0.205-0.341-0.402-0.527-0.588c-0.018-0.018-0.039-0.034-0.058-0.052 c-0.171-0.168-0.35-0.327-0.537-0.477c-0.017-0.014-0.031-0.03-0.049-0.043L242.5,89.871V15H308v28h-43c-4.142,0-7.5,3.358-7.5,7.5 s3.358,7.5,7.5,7.5h50.5c4.142,0,7.5-3.358,7.5-7.5v-43c0-4.142-3.358-7.5-7.5-7.5H235c-4.142,0-7.5,3.358-7.5,7.5v82.371 l-114.655,90.748c-0.017,0.013-0.032,0.029-0.049,0.043c-0.187,0.151-0.366,0.31-0.537,0.477c-0.018,0.018-0.039,0.034-0.058,0.052 c-0.186,0.186-0.361,0.383-0.527,0.588c-0.048,0.059-0.091,0.122-0.137,0.183c-0.115,0.151-0.226,0.304-0.33,0.464 c-0.047,0.072-0.089,0.146-0.133,0.219c-0.094,0.157-0.183,0.316-0.266,0.48c-0.038,0.076-0.074,0.151-0.11,0.228 c-0.078,0.169-0.15,0.341-0.215,0.517c-0.028,0.076-0.057,0.151-0.083,0.227c-0.062,0.182-0.114,0.368-0.162,0.557 c-0.019,0.074-0.04,0.147-0.057,0.222c-0.044,0.199-0.076,0.401-0.104,0.606c-0.009,0.066-0.023,0.132-0.03,0.198 c-0.029,0.269-0.047,0.542-0.047,0.819V240H7.5c-4.142,0-7.5,3.358-7.5,7.5v215c0,4.142,3.358,7.5,7.5,7.5h455 c4.142,0,7.5-3.358,7.5-7.5v-215C470,243.358,466.642,240,462.5,240z M455,255v25h-95v-25H455z M110,255v25H15v-25H110z M295,331.667V425h-52.5v-93.333H295z M227.5,425H175v-93.333h52.5V425z M175,440h120v15H175V440z M310,455V324.167 c0-4.142-3.358-7.5-7.5-7.5h-135c-4.142,0-7.5,3.358-7.5,7.5V455H15V295h95v137.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V194 h137.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H139.061L235,103.065L330.939,179H292.5c-4.142,0-7.5,3.358-7.5,7.5 s3.358,7.5,7.5,7.5H345v238.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V295h95v160H310z"/>
      <path stroke-width="100" d="M44.167,316.667c-4.142,0-7.5,3.358-7.5,7.5v30c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-30 C51.667,320.025,48.309,316.667,44.167,316.667z"/>
      <path stroke-width="100" d="M80.833,316.667c-4.142,0-7.5,3.358-7.5,7.5v30c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-30 C88.333,320.025,84.976,316.667,80.833,316.667z"/>
      <path stroke-width="100" d="M425.833,316.667c-4.142,0-7.5,3.358-7.5,7.5v30c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-30 C433.333,320.025,429.976,316.667,425.833,316.667z"/>
      <path stroke-width="100" d="M389.167,316.667c-4.142,0-7.5,3.358-7.5,7.5v30c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-30 C396.667,320.025,393.309,316.667,389.167,316.667z"/>
      <path stroke-width="100" d="M235,219c-20.034,0-36.333,16.299-36.333,36.333s16.299,36.333,36.333,36.333s36.333-16.299,36.333-36.333 S255.034,219,235,219z M235,276.667c-11.763,0-21.333-9.57-21.333-21.333S223.237,234,235,234s21.333,9.57,21.333,21.333 S246.763,276.667,235,276.667z"/>
    </svg>
  );
}

export default SchoolIcon;
