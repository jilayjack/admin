export class Student
{
    public constructor(public stu_id:number,public stu_email_id:string,public pass:string,
    public f_name:string,public m_name:string,public l_name:string,public gen:string,
    public adhar_no:number,public address:string,public m_no:number,public qualification:number,public img:string,
    public dob:Date,public flag:number,public fk_course_id:number ){

    }
}