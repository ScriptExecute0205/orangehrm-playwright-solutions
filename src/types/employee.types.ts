export interface NewEmployee {
  firstName: string;
  lastName: string;
}
export interface Employee extends NewEmployee
{
  employeeId : string;
}