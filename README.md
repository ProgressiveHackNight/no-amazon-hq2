# Website for the campaign to keep Amazon out of Long Island City!

## Process Notes:
Pull down the repo and make a branch for yourself that you can push to. When you're ready, submit a PR to merge to master and someone will check it out.

We are designing for mobile first! Use browser dev tools or go to your comps IP address in the web browser on your phone to make sure things are looking the way you want them to.

Scripts:

`npm start` runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will automatically reload if you make edits (woot!)

If you get an error referencing a variable called 'googleKey', go into ContactYourRep.js and comment out the lines referencing 'googleKey'. This api key is only necessary for the form in the contact your rep section. 

## Site Outline:

- Sticky Nav
  - Learn more
  - Take action
  - Contact your rep
- Header
  - Logo
  - Title
- Learn more
  - Bullet points (click to expand more info)
  - Jobs, Housing, Transportation (??)
- Take action
  - Take an action now (click to expand)
    - Sign pledge
    - Sign up to host a house party (?)
  - Upcoming actions (click to expand)
    - Rallies
    - Phone banking
    - Canvassing
    - Meetings
- Contact your rep
  - Enter address
  - Get back name of rep, position on Amazon deal, contact info
  - list of NYC city council reps, for cross referencing with results from form submission: 
    -- can be found in src/utils/key-reps.json
    -- notes about this json file: 
        -- the field called staffEmails contains some or all of the following: council member's office email, other staff members emails
  - Script for calling
- Email modal
  - Sign up for email blasts
- Footer
  - Social media
  - Contact
