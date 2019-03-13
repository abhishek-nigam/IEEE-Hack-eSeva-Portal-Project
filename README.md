# IEEE-Hack-eSeva-Portal-Project

## Description:

### Grievance redressal platform

People can post civic problems (text and images), others can comment on them (to add new details, make corrections) and upvote problems (to highlight important ones to administration).

Problems can be viewed and filtered according to different categories, regions, progress state.

Administration receives/acknowledges the problems in their area, assigns work to contractors (with deadlines)

Contractors can view the work they have been assigned, check the completion deadline, funds allocated, and update when work has been completed by them and add note/proof of completion.

Each problem has a sequence of states it can be in i.e. 1. Posted 2. Acknowledged 3. Work in progress 4. Work is done 5. Closed. Initially, when the problem is posted it will be in state(1), when the administration views it will reach state(2), then they will assign contractors to solve the issue (and add their contact) and it will reach state(3), when the work has been completed (informed by contractor) and accepted by administration it will reach state(4), finally the problem’s author is satisfied, he/she can accept and close it (and it reaches state(6)) or reraise it, in which case reaches back to state(1). He/she can rate the work done (with adds to admin/rep and contractor's rating) // if the user neither reraises the problem nor closes it in a period of 10 days, the problem will autoclose

Abuse of the system can be prevented, by verifying Aadhar and phone of public users registering on the platform, using reCaptcha to prevent bot attacks. It will also use machine learning to remove spurious problems, etc. If required, we can have moderators, who filter out illegitimate problems.

Each administrator/representative will have a profile, which will list all the problems posted in their region (when they were in tenure) and their completion statuses. This can be used by the public to assess them during elections/appraisals.




## Instructions
1. git clone https://github.com/Manvityagi/Vihaan-Hack.git
2. cd "Vihaan-Hack"
3. npm install
4. npm start
5. Open http://localhost:3000 in browser
