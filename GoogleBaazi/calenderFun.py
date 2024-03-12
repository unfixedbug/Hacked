from datetime import datetime, timedelta
from calendar_service import get_calendar_service 

def createTaskOn(date, taskId,service):
    # service = get_calendar_service()

    d = date
    tomorrow = datetime(d.year, d.month, d.day,  10) + timedelta(days=1)
    start = tomorrow.isoformat()
    end = (tomorrow + timedelta(hours=1)).isoformat()

    event_result = service.events().insert(calendarId='primary',
        body={
            "summary": taskId,
            "description": 'Gater',
            "start": {"dateTime": start, "timeZone": 'Asia/Kolkata'},
            "end": {"dateTime": end, "timeZone": 'Asia/Kolkata'},
        }
    ).execute()

    print("created event")
    print("id: ", event_result['id'])
    print("summary: ", event_result['summary'])
    print("starts at: ", event_result['start']['dateTime'])
    print("ends at: ", event_result['end']['dateTime'])


# operate for list of tasks for one day
def createTasksForDate(date, list):
    # create  separate  tasks for this  date
    return 0
def createTaskForDate(date,list):
    return 0
# operate  for  single task for da

if __name__ == '__main__':
    date = datetime.today()
    service = get_calendar_service()
    createTaskOn(date=date,taskId=78,service=service)

# create  the service globallyy