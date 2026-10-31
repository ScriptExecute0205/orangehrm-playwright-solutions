export interface NewEmployee {
  firstName: string;
  lastName: string;
//  employeeId: string;
}
export interface Employee extends NewEmployee
{
  employeeId : string;
}