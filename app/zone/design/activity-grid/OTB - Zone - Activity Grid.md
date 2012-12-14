XHTML Header: <script src="builder/js/jquery-1.8.1.min.js"></script>
XHTML Header: <script src="builder/js/jquery-ui-1.8.23.custom.min.js"></script>
XHTML Header: <script src="builder/js/activity-grid.js"></script>
XHTML Header: <link rel="stylesheet" type="text/css" href="builder/css/activity-grid.css" />

# Zone - The Activity Grid

1. Call Contacts
	1. Find Contacts to Call
		1. **COMMON** [DisplayHome][]
		1. **COMMON** [FindContacts][]
		1. **OR**
		1. **COMMON** [DisplayGroup][]
		1. **COMMON** [FindContacts][]
	1. Identify whether Now is a Suitable Time to Call
		1. **COMMON** [ViewContacts][]
		1. **COMMON** **AND/OR** [CheckAvailabilityIndicators][]
		1. **COMMON** **AND/OR** [CheckContactTime][]
		1. **OR**
		1. **COMMON** [DisplayContactInfo][]
		1. **COMMON** **AND/OR** [CheckAvailabilityIndicators][]
		1. **COMMON** **AND/OR** [CheckContactTime][]
	1. Call Contacts
		1. **COMMON** [SelectContacts][]
		1. **COMMON** [SelectPhoneSSM][]
		1. Make a Phone Call
			1. Tap the Call button
1. Message Contacts
	1. Find Contacts to Message
		1. **COMMON** [DisplayHome][]
		1. **COMMON** [FindContacts][]
		1. **OR**
		1. **COMMON** [DisplayGroup][]
		1. **COMMON** [FindContacts][]
	1. Send Message
		1. **COMMON** [SelectContacts][]
		1. **COMMON** [SelectPhoneSSM][]
		1. **COMMON** [SendMessage][]
		1. **OR**
		1. **COMMON** [DisplayContactInfo][]
		1. **COMMON** [SelectPhoneSSM][]
		1. **COMMON** [SendMessage][]
1. Schedule Meeting
	1. Find Contacts to Send Meeting Request
		1. **COMMON** [DisplayHome][]
		1. **COMMON** [FindContacts][]
		1. **OR**
		1. **COMMON** [DisplayGroup][]
		1. **COMMON** [FindContacts][] 
	1. Identify Suitable Time for Meeting
		1. **COMMON** [ViewContacts][]
		1. **COMMON** [ChangeTimeViaTimeTravel][]
		1. **COMMON** **AND/OR** [CheckAvailabilityIndicators][]
		1. **COMMON** **AND/OR** [CheckContactTime][]
		1. **OR**
		1. **COMMON** [DisplayContactInfo][]
		1. **COMMON** [ChangeTimeViaTimeTravel][]
		1. **COMMON** **AND/OR** [CheckAvailabilityIndicators][]
		1. **COMMON** **AND/OR** [CheckContactTime][]
	1. Send Meeting Request
		1. **COMMON** [SelectContacts][]
		1. Select the Meetings SSM
			1. Slide the SSM Left/Right to display the Meetings SSM
		1. Send a Meeting Request
			1. Tap the New Meeting Request button
			1. Enter Meeting Request content
			1. **OR** Tap the Send button
			1. **OR** Tap the Cancel button
1. Manage Contacts
	1. Add Contact
		1. **COMMON** [DisplayHome][]
		1. Create a new Contact
			1. Tap the Add Contact button
		1. **COMMON** [EnterData][]
		1. **COMMON** [SaveOrCancel][]
	1. View Contact
		1. **COMMON** [DisplayHome][]
		1. **COMMON** [FindContacts][]
		1. **COMMON** [DisplayContactInfo][]
		1. **OR**
		1. **COMMON** [DisplayGroup][]
		1. **COMMON** [FindContacts][]
		1. **COMMON** [DisplayContactInfo][]
	1. Edit Contact
		1. **COMMON** [DisplayHome][]
		1. **COMMON** [FindContacts][]
		1. **COMMON** [DisplayContactInfo][]
		1. **COMMON** [EnterEditMode][]
		1. **COMMON** [EnterData][]
		1. **COMMON** [SaveOrCancel][]
		1. **OR**
		1. **COMMON** [DisplayGroup][]
		1. **COMMON** [FindContacts][]
		1. **COMMON** [DisplayContactInfo][]
		1. **COMMON** [EnterEditMode][]
		1. **COMMON** [EnterData][]
		1. **COMMON** [SaveOrCancel][]
	1. Delete Contact
		1. **COMMON** [DisplayHome][]
		1. **COMMON** [FindContacts][]
		1. **COMMON** [DisplayContactInfo][]
		1. **COMMON** [EnterEditMode][]
		1. **COMMON** [DeleteContact][]
		1. **OR**
		1. **COMMON** [DisplayGroup][]
		1. **COMMON** [FindContacts][]
		1. **COMMON** [DisplayContactInfo][]
		1. **COMMON** [EnterEditMode][]
		1. **COMMON** [DeleteContact][]
1. Manage Groups
	1. Add Group
		1. **COMMON** [DisplayHome][]
		1. **COMMON** [SelectContacts][]
		1. Create a new Group
			1. Tap the Add Group button
		1. **COMMON** [EnterData][]
		1. **COMMON** [SaveOrCancel][]
	1. View Group
		1. **COMMON** [DisplayGroup][]
	1. Edit Group
		1. **COMMON** [DisplayGroup][]
		1. **COMMON** [EnterEditMode][]
		1. **COMMON** [EnterData][]
		1. **COMMON** [SaveOrCancel][]
	1. Delete Group
		1. **COMMON** [DisplayGroup][]
		1. **COMMON** [EnterEditMode][]
		1. **COMMON** [DeleteGroup][]
	1. Add Contact
		1. **COMMON** [EnterEditMode][]
		1. **COMMON** [SelectContacts][]
		1. **COMMON** [SaveOrCancel][]
	1. Remove Contact
		1. **COMMON** [EnterEditMode][]
		1. **COMMON** [DeselectContacts][]
		1. **COMMON** [SaveOrCancel][]
1. Manage Preferences
	1. View Preferences
		1. **COMMON** [DisplayHome][]
		1. **COMMON** [DisplayPreferences][]
	1. Edit Preferences
		1. **COMMON** [DisplayHome][]
		1. **COMMON** [DisplayPreferences][]
		1. **COMMON** [EnterData][]
		1. **COMMON** [SaveOrCancel][]
1. Common Tasks
	1. Common Actions
		1. Display Home <a id="DisplayHome"></a>
			1. **OR** If you are viewing a Group; Tap the Home button
			1. **OR** If you are viewing a Contact; Tap the Back button, then _if necessary_, also Tap the Home button (extra step needed only if you were viewing a Contact whilst in _Group_ view)
			1. **OR** If you are viewing Preferences; Tap the Back Button, then _if necessary_, also Tap the Home button (extra step needed only if you were viewing Preferences whilst in _Group_ view) 
			1. **OR** If you are editing a Group; Tap the Done or Cancel button and then Tap the Home button			
			1. **OR** If you are editing a Contact; Tap the Done or Cancel button, Tap the Back button, then _if necessary_, also Tap the Home button (extra step needed only if you were editing a Contact whilst in _Group_ view)
			1. **OR** If you are editing Preferences; Tap the Done or Cancel button, Tap the Back button, then _if necessary_, also Tap the Home button (extra step needed only if you were editing Preferences whilst in _Group_ view)
		1. Display a Group <a id="DisplayGroup"></a>
			1. **OR** If you are viewing the Home Screen; Tap the Title Bar (to view the drop-down list of Groups) and then Tap a Group to display it
			1. **OR** If you are already viewing a Group and want to change to a different group; Tap the Title Bar (to view the drop-down list of Groups) and then Tap a Group to display it
			1. **OR** If you are viewing a Contact; Tap the Back button, and _if necessary_, also Tap the Title Bar (to view the drop-down list of Groups), then Tap the Group you want to view (extra steps needed only if you were viewing a Contact whilst in _Home_ view)
			1. **OR** If you are viewing Preferences; Tap the Back button, and _if necessary_, also Tap the Title Bar (to view the drop-down list of Groups), then Tap the Group you want to view (extra steps needed only if you were viewing Preferences whilst in _Home_ view)
			1. **OR** If you are editing a Group; Tap the Done or Cancel button
			1. **OR** If you are editing a Contact; Tap the Done or Cancel button, then Tap the Back button, and _if necessary_, also Tap the Title Bar (to view the drop-down list of Groups), then Tap the Group you want to view (extra steps needed only if you were editing a Contact whilst in _Home_ view)
			1. **OR** If you are editing Preferences; Tap the Done or Cancel button, then Tap the Back button, and _if necessary_, also Tap the Title Bar (to view the drop-down list of Groups), then Tap the Group you want to view (extra steps needed only if you were editing Preferences whilst in _Home_ view) 
		1. Display Preferences <a id="DisplayPreferences"></a>
			1. Tap the Preferences button
		1. Find Contacts <a id="FindContacts"></a>          	        	
			1. **OR** Tap a letter in the A-Z Search control
			1. **OR** Tap the Time-Zone (up/down) Sort Order button
			1. **OR** Tap the Availability Sort Order button
			1. **OR** Flick Up/Down to Scroll to a Contact
		1. View Contacts <a id="ViewContacts"></a>
			1. Flick Up/Down to Scroll through Contacts
		1. Display Contact Info<a id="DisplayContactInfo"></a>
			1. Tap + Hold a Contact
		1. Change Time via Time Travel <a id="ChangeTimeViaTimeTravel"></a>
			1. Tap the Time Travel button
			1. **OR** Slide the Time Travel control right to move the current time forward
			1. **OR** Slide the Time Travel control left to move the current time backward
		1. Check Availability Indicators <a id="CheckAvailabilityIndicators"></a>
			1. View Contact Availability Indicators (e.g. red, amber, green)
		1. Check Contact Time <a id="CheckContactTime"></a>
			1. View Contact Time
		1. Select Contacts <a id="SelectContacts"></a>
			1. **OR** Tap each unselected Contact to select (tap again to deselect)
			1. **OR** Shake device to select all Contacts (shake again to deselect all)
		1. Deselect Contacts <a id="DeselectContacts"></a>
			1. Tap each selected Contact to deselect (tap again to select)
		1. Select the Phone SSM <a id="SelectPhoneSSM"></a>
			1. Slide the SSM Left/Right to display the Phone SSM
		1. Send a Message <a id="SendMessage"></a>
			1. Tap the New Message button
			1. Enter Message content
			1. **OR** Tap the Send button
			1. **OR** Tap the Cancel button
		1. Enter Edit Mode <a id="EnterEditMode"></a>
			1. Tap the Edit button
		1. Enter Data <a id="EnterData"></a>
			1. **OR** Tap a field to enter a value
			1. **OR** Tap/Slide (interact with) a control to select a value
		1. Delete Contact <a id="DeleteContact"></a>
			1. Tap the Delete Contact button
			1. **OR** Tap the Delete Contact button again (to confirm delete)
			1. **OR** Tap the Cancel button
		1. Delete Group <a id="DeleteGroup"></a>
			1. Tap the Delete Group button
			1. **OR** Tap the Delete Group button again (to confirm delete)
			1. **OR** Tap the Cancel button
		1. Save or Cancel <a id="SaveOrCancel"></a>
			1. **OR** Tap the Done button to save changes
			1. **OR** Tap the Cancel button to exit without saving changes


### List of Issues

1. **General Point on Design Process** - at this point, certain specific UI design details (which controls, their placement, etc) have not yet been decided upon. I see us initially trying to get the basic flow of Activities, Tasks, Actions and Operation down, identifying any 'rough edges' (as per our V1 design) and smoothing them out. At some point, we'll feel ready to begin creating our Interactive Sketching Notation (ISN) diagrams, which is the stage where we'll design out more of the UI, and then I see us iterating around the Activity Grid <-> ISN "loop". When we've got those two things down, I think we'll be well placed to begin prototyping. _Added by Ian._

[DisplayHome]: #DisplayHome "Display Home"
[DisplayGroup]: #DisplayGroup "Display a Group"
[DisplayPreferences]: #DisplayPreferences "Display Preferences"
[FindContacts]: #FindContacts "Find Contacts"
[ViewContacts]: #ViewContacts "View Contacts"
[SelectContacts]: #SelectContacts "Select Contacts"
[DeselectContacts]: #DeselectContacts "Deselect Contacts"
[DeleteContact]: #DeleteContact "Delete Contact"
[DeleteGroup]: #DeleteGroup "Delete Group"
[EnterData]: #EnterData "Enter Data"
[SaveOrCancel]: #SaveOrCancel "Save or Cancel"
[SendMessage]: #SendMessage "Send a Message"
[DisplayContactInfo]: #DisplayContactInfo "Display Contact Info"
[EnterEditMode]: #EnterEditMode "Enter Edit Mode"
[CheckAvailabilityIndicators]: #CheckAvailabilityIndicators "Check Availability Indicators"
[CheckContactTime]: #CheckContactTime "Check Contact Time"
[ChangeTimeViaTimeTravel]: #ChangeTimeViaTimeTravel "Change Time via Time Travel"
[SelectPhoneSSM]: #SelectPhoneSSM "Select the Phone SSM"
[SendMessage]: #SendMessage "Send a Message"
[SendMeetingRequest]: #SendMeetingRequest "Send a Meeting Request"



