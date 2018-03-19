import * as React from "react";

import { INPUT_DEBOUNCE_TIME } from "shared/constants";
import ScoreType from "shared/enums/score-type";
import { connectScoreType } from "./connect-score-type";

import DropdownField from "shared/components/ui/fields/dropdown-field";

const Field = (props) => {
  return <DropdownField
    label="Math Grade"
    value={props.value}
    onChange={props.onChange}
    debounceTime={INPUT_DEBOUNCE_TIME}
  >
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="F">F</option>
  </DropdownField>
}

export const SubjGradeMathField = connectScoreType(ScoreType.subjGradeMath)(Field);
