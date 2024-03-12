from datetime import datetime, date,timedelta,timezone
from calendar_service import get_calendar_service
from calenderFun import createTaskOn 
from calendar_task_service import get_task_service
# chapters till 29 october 250 days
import time
# final date should be 15 february , stop adding dates from 250 days

def nextDate(now,interval):
    return now + timedelta(days=interval)

def isWeekend(today):
    weekno = today.weekday()
    if weekno >= 5:
        return True
    else:
        return False

def getIndex(Ndate):
    delta = Ndate - date.today()
    return delta.days

def updateIndex(index,task):
    lol[index].append(task)

def revise(startDate,days):
    for next_task in range(1,days):
        time.sleep(1)
        taskDate = nextDate(startDate,next_task)
        print(f"taskId: {next_task} , date:{taskDate}")
        # index = getIndex(taskDate,startDate)
        # updateIndex(index,task)
        createTaskOnDate(taskDate,next_task,taskidBlue)

    
def createTaskOnDate(task_date,taskNumber,task_lists_id):
    task_date = task_date.isoformat()
    task = {
        'title': str(taskNumber),
        'due' :  str(task_date),
        'notes': 'kam padho bar bar padho'
    }
    task_result  = service.tasks().insert(tasklist=task_lists_id,body=task).execute()
    # print(task_result)
    
    
def reviseInIntervals():
    today = datetime.now(timezone.utc)
    revise(today,300)
    for interval in intervals:
        today = nextDate(today,interval)
        revise(nextDate(today,interval),300)
    
def createTestTaskToday(taskId,taskid):
    today = nextDate(datetime.now(timezone.utc),2).isoformat()
    print(today)
    task = {
        'title': 'HI PRATIK',
        'due' :  today
    }
    task_result  = service.tasks().insert(tasklist=taskid,body=task).execute()
    print(task_result)
    
    
def createTaskList(title):
    tkl = {
        'title': title,
        'id':title
    }
    lis = service.tasklists().insert(body=tkl).execute()
    print(lis)
    return lis 

def deleteTaskList(id):
    service.tasklists().delete(tasklist=id).execute();
    print(f"Deleted  Task: {id}")
        # return 1

# def reviseTaskFromDate(date,task): this should work too add entries in this interval incase you  sstudy on weekends OK
    


if __name__ == '__main__':
    intervals = [1,3,6,12,20,30,40,50,60,70]
    service = get_task_service()
    
    # createTaskList('GATER BAAZI')
    # taskidBlue='cFpTV3dhZ0x1UDQxSUozQg' 5
    taskidBlue='V1kyemVpUlI4S1g3dUNCYw'
    # createTestTaskToday(69,taskid)
    # revise(datetime.now(timezone.utc),300)
    today = datetime.now(timezone.utc)
    yesterday =nextDate(today,-1) 
    # print(yesterday)
    revise(yesterday,300)
    # reviseInIntervals()
    # deleteTaskList(taskidBlue)