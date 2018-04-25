const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// 

const admin = require('firebase-admin');
admin.initializeApp();
const twilio = require('twilio');
const accountSid = functions.config().twilio.sid
const authToken  = functions.config().twilio.token
const client = new twilio(accountSid, authToken);
const twilioNumber = '+16042007775'   // your twilio phone number


//send sms on update start time
// exports.textStatus = functions.database
//        .ref('/clients/{key}/lastName')
//        .onUpdate((change, context) => {
//            const orderKey = context.params.key
//            return admin.database()
//                        .ref(`/clients/${orderKey}`)
//                        .once('value')
//                        .then(snapshot => snapshot.val())
//                        .then(appointment => {
//                            const name = appointment.firstName
//                           // const start = DisplayCurrentTime(appointment.start)
//                            const phoneNumber = appointment.phone
//                            console.log('Updating appointment for: ' + name + ' with phone ' + phoneNumber )
//                            if (!validE164(phoneNumber)) {
//                                throw new Error('number must be E164 format!')
//                            }
//                            const textMessage = {
//                                //body: `Hello ${name}, you have an Appointment on ${start} - Saddhers`,
//                                body: `Thank you for your enrolment in lucky draw - Gill Insurance Agency. For more details please call 604-850-9000 or visit paramjitgill.ca`,
//                                //to: +17787792744,
//                                to: phoneNumber,  // Text to this number
//                                from: twilioNumber // From a valid Twilio number
//                            }
//                            console.log('Sending messge to' + name + 'on phone number' + phoneNumber  )
//                           return client.messages.create(textMessage).then(message => console.log(message.sid, 'success'))
//                                                                      .catch(err => console.log(err))
                          
//                        })
                       
//        });

        //send sms on create client
       exports.luckyDrawClient = functions.database
       .ref('/clients/{key}/phone')
       .onCreate((change, context) => {
           const orderKey = context.params.key
           return admin.database()
                       .ref(`/clients/${orderKey}`)
                       .once('value')
                       .then(snapshot => snapshot.val())
                       .then(appointment => {
                           const name = appointment.firstName
                          // const start = DisplayCurrentTime(appointment.start)
                           const phoneNumber = appointment.phone
                           console.log('Updating appointment for: ' + name + ' with phone ' + phoneNumber )
                           if (!validE164(phoneNumber)) {
                               throw new Error('number must be E164 format!')
                           }
                           const textMessage = {
                               //body: `Hello ${name}, you have an Appointment on ${start} - Saddhers`,
                               body: `Thank you for your enrolment in lucky draw - Gill Insurance Agency. For more details please call 604-850-9000 or visit paramjitgill.ca`,
                               //to: +17787792744,
                               to: phoneNumber,  // Text to this number
                               from: twilioNumber // From a valid Twilio number
                           }
                           console.log('Sending messge to' + name + 'on phone number' + phoneNumber  )
                          return client.messages.create(textMessage).then(message => console.log(message.sid, 'success'))
                                                                     .catch(err => console.log(err))
                          
                       })
                       
       });


/// Validate E164 format
function validE164(num) {
    return /^\+?[1-9]\d{1,14}$/.test(num)
}