export class Event
{
    public constructor(public event_id:number,public event_title:string,public event_desc:string,
    public event_location:string,public event_img:string,public event_date:Date,public seminar_video:string,
    public fk_course_id:number){

    }
}