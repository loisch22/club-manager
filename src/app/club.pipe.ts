import { Pipe, PipeTransform } from '@angular/core';
import { Club } from './club.model';

@Pipe({
  name: 'club',
  pure: false
})
export class ClubPipe implements PipeTransform {

  transform(input: Club[], desiredFilter){
    let output: Club[] = [];
    if (desiredFilter === "weekendHours"){
      for (let i = 0; i < input.length; i++){
        if(input[i].weekendHours == true){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFilter === "summerHours"){
      for (let i = 0; i < input.length; i++){
        if(input[i].summerHours == true){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFilter === "mealsProvided") {
      for (let i = 0; i < input.length; i++){
        if(input[i].mealsProvided == true){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFilter === "teenCenter") {
      for (let i = 0; i < input.length; i++){
        if(input[i].teenCenter == true){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }

  }

}
