(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},103:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(13),s=n.n(r),i=(n(46),n(1)),c=n(2),l=n(4),u=n(3),h=n(5),p=n(6),m=n.n(p),d=n(9),f=n(7),v=(n(50),n(38)),g=n.n(v),b=function(e){for(var t,n=e.city,a=e.zip,o=/^\d+$/,r="",s=0,i=0;i<e.line1.length;i++)if(t=e.line1[i],!s){if(!o.test(t)){s=i;break}r+=t}return{streetNo:r,streetName:e.line1.slice(s+1),city:n,zip:a}},w=function(){var e=Object(d.a)(m.a.mark(function e(t){var n,a,o,r,s,i;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=b(t),a=n.streetNo,o=n.streetName,r=n.zip,s="https://api.cityofnewyork.us/geoclient/v1/address.json?houseNumber=".concat(a,"&street=").concat(o,"&zip=").concat(r,"&app_id=").concat("cccc6b4e","&app_key=").concat("zZJRjrzTaNbckTpEncSAiu"),e.prev=2,e.next=5,g.a.jsonp(s);case 5:return i=e.sent,e.abrupt("return",i.address.cityCouncilDistrict);case 9:e.prev=9,e.t0=e.catch(2),console.error("error fetching city council district number",e.t0);case 12:case"end":return e.stop()}},e,this,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),y=function(e){return["Bronx County","Kings County","New York County","Richmond County","Queens County"].includes(e)},k=function(){var e=Object(d.a)(m.a.mark(function e(t,n){var a,o,r,s,i;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(n);case 2:if(a=e.sent,o=Object.keys(t),r=o[3],s=o[4],i=t[r].name,!y(i)||!a){e.next=11;break}return e.abrupt("return","".concat(s,"/council_district:").concat(a));case 11:return e.abrupt("return","notNYC");case 12:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),j=n(70),x=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={showForm:!1,gapi:null,address:"",districtNumber:"",federalAndState:[],local:[],normalizedInput:{}},e.loadClient=e.loadClient.bind(Object(f.a)(Object(f.a)(e))),e.getAllReps=e.getAllReps.bind(Object(f.a)(Object(f.a)(e))),e.getFederalAndStateReps=e.getFederalAndStateReps.bind(Object(f.a)(Object(f.a)(e))),e.getLocalReps=e.getLocalReps.bind(Object(f.a)(Object(f.a)(e))),e.toggleForm=e.toggleForm.bind(Object(f.a)(Object(f.a)(e))),e.handleChange=e.handleChange.bind(Object(f.a)(Object(f.a)(e))),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return t=e.sent,e.next=5,this.setState({gapi:t});case 5:return e.next=7,this.loadClient();case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadClient",value:function(){var e=Object(d.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=this.state.gapi).client.setApiKey("AIzaSyCdyRfmiG8bfZi_HJedvaIJ4xO35IWhZ9U"),e.prev=2,e.next=5,t.client.load("https://content.googleapis.com/discovery/v1/apis/civicinfo/v2/rest");case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error("Error loading google client for API",e.t0);case 10:case"end":return e.stop()}},e,this,[[2,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(){var e=Object(d.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({address:t.target.value});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getAllReps",value:function(){var e=Object(d.a)(m.a.mark(function e(t){var n,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=[],a=[],e.prev=2,e.next=5,this.getFederalAndStateReps();case 5:n=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log("error fetching federal and state reps",e.t0);case 11:return e.prev=11,e.next=14,this.getLocalReps();case 14:a=e.sent,e.next=20;break;case 17:e.prev=17,e.t1=e.catch(11),console.log("error fetching local reps",e.t1);case 20:return e.abrupt("return",n.concat(a));case 21:case"end":return e.stop()}},e,this,[[2,8],[11,17]])}));return function(t){return e.apply(this,arguments)}}()},{key:"getFederalAndStateReps",value:function(){var e=Object(d.a)(m.a.mark(function e(){var t,n,a,o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n=t.gapi,a=t.address,e.prev=1,e.next=4,n.client.civicinfo.representatives.representativeInfoByAddress({address:a,includeOffices:!0});case 4:return o=e.sent,e.next=7,this.setState({federalAndState:o.result.officials,normalizedInput:o.result.normalizedInput,divisions:o.result.divisions});case 7:return e.abrupt("return",this.state.federalAndState);case 10:e.prev=10,e.t0=e.catch(1),console.error("error fetching representative info",e.t0);case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"getLocalReps",value:function(){var e=Object(d.a)(m.a.mark(function e(){var t,n,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(this.state.divisions,this.state.normalizedInput);case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("error fetching ocd id",e.t0);case 9:if("notNYC"===t){e.next=23;break}return e.prev=10,e.next=13,this.state.gapi.client.civicinfo.representatives.representativeInfoByDivision({ocdId:t});case 13:return n=e.sent,a=n.result.officials,e.next=17,this.setState({local:a});case 17:return e.abrupt("return",a);case 20:e.prev=20,e.t1=e.catch(10),console.error("error fetching local reps",e.t1);case 23:return e.abrupt("return",[]);case 24:case"end":return e.stop()}},e,this,[[0,6],[10,20]])}));return function(){return e.apply(this,arguments)}}()},{key:"toggleForm",value:function(){var e=Object(d.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState(function(e){return{showForm:!e.showForm}});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.address;return o.a.createElement("div",{className:"ContactYourRep",id:this.props.id},o.a.createElement("h1",{className:"repHeader",onClick:this.toggleForm,style:{padding:"2%"}},"Contact Your Rep"),this.state.showForm&&o.a.createElement("form",{style:{display:"flex",flexDirection:"column"}},o.a.createElement("input",{value:e,name:"addressLine1",type:"text",placeholder:"Address Line 1",className:"repFormInput",onChange:this.handleChange}),o.a.createElement("button",{type:"submit",onClick:this.getAllReps,className:"repFormButton"},"Who's your rep?")))}}]),t}(a.Component),E=(n(78),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={clicked:!1},n.onClick=n.onClick.bind(Object(f.a)(Object(f.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onClick",value:function(){var e=this.state.clicked;this.setState({clicked:!e})}},{key:"render",value:function(){return o.a.createElement("div",{className:"DropDown"},o.a.createElement("h5",{id:"headline",onClick:this.onClick},this.props.headline),this.state.clicked&&o.a.createElement("div",null,o.a.createElement("ul",null,this.props.text.map(function(e,t){return o.a.createElement("li",{key:t},e)})),this.props.sources&&o.a.createElement("div",null,o.a.createElement("p",null,"Sources:"),o.a.createElement("ul",null,this.props.sources.map(function(e,t){return o.a.createElement("li",{key:t},e)})))))}}]),t}(a.Component)),O=(n(80),n(22),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"EmailSignup",id:this.props.id},o.a.createElement("h2",null,"Sign up for the mailing list"),o.a.createElement("form",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"twelve columns, EmailFormField"},o.a.createElement("label",{htmlFor:"exampleEmailInput"},"Your email"),o.a.createElement("input",{className:"u-full-width",type:"email",placeholder:"test@mailbox.com",id:"exampleEmailInput"}))),o.a.createElement("div",null,o.a.createElement("input",{className:"button-primary",type:"submit",value:"Submit"}))))}}]),t}(a.Component)),C=n(39),N=n.n(C),A=n(40),z=n.n(A),S=(n(82),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={links:[{link:"#",image:N.a,alt:"twitter"},{link:"#",image:z.a,alt:"facebook"},{link:"#",alt:"email",text:"Contact Us"}]},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Footer"},o.a.createElement("div",{className:"center-container"},this.state.links.map(function(e){return o.a.createElement("a",{href:e.link,alt:e.alt},e.image&&o.a.createElement("img",{className:"social-logo",src:e.image}),e.text&&e.text)})))}}]),t}(a.Component)),I=n(18),R=n.n(I),F=(n(84),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Header"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"twelve columns"},o.a.createElement("h1",null,"Keep Amazon Out!")),o.a.createElement("div",{className:"twelve columns"},o.a.createElement("img",{id:"frowny-face",src:R.a,alt:"Amazon Frowny Face"})),o.a.createElement("div",{className:"twelve columns"},o.a.createElement("h4",null,"Help say no to Amazon HQ2 in Queens"))))}}]),t}(a.Component)),L=[{headline:"Amazon claims it will hire 25,000 employess in NYC, making an average of $150,000 annually -- but that figure is skewed by a few very high-paid positions at the top of the ladder. In reality, half of Amazon employees make less than $28,446 a year.",text:["Amazon's presence in NYC promises to exacerbate inequality. In Seattle, the city where Amazon was founded, the population has surged by 40% over the last 10 years, driving up housing prices and pushing out long-time residents. While high paid, high quality jobs are desirable, there is no guarantee that these jobs will actually benefit New Yorkers, and there is nothing to stop Amazon from relocating individuals to fill those roles.",'Lower paid workers at Amazon, like those who work in Amazon\'s warehouses, are routinely mistreated. "Picker rates" (the number of items a worker must pull per-hour) are extremely high, leading workers to skip bathroom breaks and even pee in bottles for fear of accruing "Time off Task Points" that could be used to justify job termination. These grueling working conditions have led to high rates of injury and a "disturbing pattern of preventable deaths". Seven workers have died at Amazon facilities since 2013.'],sources:["https://money.cnn.com/2018/04/19/technology/amazon-employee-salary/index.html","https://www.theguardian.com/cities/2018/jul/04/is-bezos-holding-seattle-hostage-the-cost-of-being-amazons-home","https://d3n8a8pro7vhmx.cloudfront.net/rwdsu/pages/31/attachments/original/1543251619/What%27s_Wrong_With_Amazon.pdf?1543251619"]},{headline:'Housing: In 2010, Seattle rents were in line with the rest of the U.S. Since then, they have jumped 40% (dubbed "The Amazon Effect") and Seattle now has the third highest number of homeless residents in the nation. HQ2 in NYC could push at least 800 people into homelessness.',text:['Studies have shown that homelessness increases rapidly when rent is greater than or equal to one third of average income and homelessness impacts everyone. In Seattle, 35% of the homeless population has some college or a college degree. Between 2010 and 2017 the population of homeless kids grew from 1,300 to 4,200. In response to the increase in homelessness, Seattle moved to impose a $275-per-employee "head tax" on large employers like Amazon to help pay for homeless serves and public housing. Amazon fought the tax aggressively, ultimately causing the City Council to repeal the tax.',"Long Island City, the site of Amazon's proposed development, is very close to Blissville, a city-run shelter that is home to over 400 homeless people. Shelters such as Blissville are a central part of NYC's approach to curbing homelessness and would undoubtably be impacted by HQ2. According to a study by the National Bureau of Economic Research, when prices rise, \u201cpoor neighborhoods that are in close proximity to the rich neighborhoods are the ones that have housing prices increase the most.\u201d Vacancy rates for afforable housing (less than $800 per month) in NYC are 1%, compared with 3.5% overall. This means that once the poor are priced out out of their homes, there is nowhere else to go."],sources:["https://www.theguardian.com/cities/2019/jan/08/amazon-homelessness-long-island-city-queens","https://www.nber.org/papers/w16237","https://www1.nyc.gov/assets/dhs/downloads/pdf/turning-the-tide-on-homelessness.pdf","https://www.zillow.com/research/homelessness-rent-affordability-22247/","https://www.builderonline.com/money/economics/the-amazon-effect-rising-rents_o","http://coshumaninterests.wpengine.netdna-cdn.com/wp-content/uploads/2017/04/City-of-Seattle-Report-FINAL-with-4.11.17-additions.pdf","https://www.seattlemet.com/articles/2018/4/12/in-south-seattle-the-number-of-homeless-students-tripled-since-2010","https://www.marketwatch.com/story/amazon-hq2-could-push-800-people-into-homelessness-economist-says-2018-11-16"]},{headline:"New York has promised Amazon up to $3 billion in tax breaks and public subsidies. Amazon claims that this investment will pay back three fold in tax reveune -- but this does not take into account the significant strain Amazon's presence could have on already crumbling infrastructure in NYC, and Amazon's historic unwillingness to help pay for it.",text:["In Seattle, the flow of cars to the Amazon campus has lead to long traffic jams to the interstate. Seattle's public transit system is struggling, but Amazon has contributed only minorly to helping with upkeep. Seattle's efforts to get Amazon to help pay for the costs to the city have been unsuccessful, and the strain on NYC's infratructure could cause significant costs for NYC. New York city is the third most traffic congested city, the older sewer systems in LIC are backing up, and schools and subways are already overcrowded.","In Washington State, Amazon has used its powerful influence and significant financial resources to lobby the state not only to avoid paying for its costs to Seattle, but also for legislation that benefits the company at the expense of workers. Amazon is aggressively anti-union and recently said they would not remain neutral if workers in New York attempted to unionize. Amazon's history of political influence and anti-union stance could result in weakened union laws not only for workers in Amazon warehouses, but for all workers in New York."],sources:["https://www.theguardian.com/business/2018/oct/01/whole-foods-amazon-union-organization-grocery-chain","https://www.businessinsider.com/amazon-hq2-long-island-city-needs-infrastructure-upgrades-2018-11","https://www.dnainfo.com/new-york/20170921/riverdale/overcrowded-schools-nyc-class-size-matters/","https://ny.curbed.com/2018/2/6/16979696/new-york-city-traffic-congestion-second-worst","https://www.theguardian.com/cities/2018/jul/04/is-bezos-holding-seattle-hostage-the-cost-of-being-amazons-home","https://www.seattletimes.com/seattle-news/transportation/seattle-is-a-world-class-city-for-traffic-congestion/","https://citylimits.org/2019/01/18/new-york-city-isnt-just-getting-amazons-jobs-its-also-welcoming-its-political-agenda/"]}],Y=[{headline:"Now",text:["Sign the petition","Host a house party","Other option","Other other option"]},{headline:"Upcoming",text:["Protest at City Council Meeting on xx/xx","Speak out at Community Board Meeting on xx/xx","Other event","Other other event"]}],T=(n(86),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={bullets:L},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"LearnMore",id:this.props.id},o.a.createElement("h1",null,"Amazon's Lies"),this.state.bullets.map(function(e){return o.a.createElement(E,{key:e.headline,headline:e.headline,text:e.text,sources:e.sources})}))}}]),t}(a.Component)),W=(n(88),n(10)),B=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).scrollToTop=function(){W.animateScroll.scrollToTop()},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"Nav"},o.a.createElement("div",{className:"nav-content"},o.a.createElement("img",{src:R.a,className:"nav-logo",alt:"Logo",onClick:this.scrollToTop}),o.a.createElement("ul",{className:"nav-items"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(W.Link,{activeClass:"active",to:"facts",spy:!0,smooth:!0,offset:-70,duration:500},"Facts")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(W.Link,{activeClass:"active",to:"learn-more",spy:!0,smooth:!0,offset:-70,duration:500},"Learn More")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(W.Link,{activeClass:"active",to:"take-action",spy:!0,smooth:!0,offset:-70,duration:500},"Take Action!")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(W.Link,{activeClass:"active",to:"contact-rep",spy:!0,smooth:!0,offset:-70,duration:500},"Contact Your Representatives")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(W.Link,{activeClass:"active",to:"signup",spy:!0,smooth:!0,offset:-70,duration:500},"Get Updates")))))}}]),t}(a.Component),q=n(19),H=n.n(q),U=(n(99),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={bullets:Y},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"TakeAction",id:this.props.id},o.a.createElement("img",{src:H.a,alt:"Woman holding sign Amazon Causes Gentrification"}),o.a.createElement("div",{id:"action-text"},o.a.createElement("h1",null,"Take Action"),this.state.bullets.map(function(e){return o.a.createElement(E,{key:e.headline,headline:e.headline,text:e.text})})))}}]),t}(a.Component)),_=(n(101),a.Component,n(103),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(B,null),o.a.createElement(F,null),o.a.createElement(T,{id:"learn-more"}),o.a.createElement(U,{id:"take-action"}),o.a.createElement(x,{id:"contact-rep"}),o.a.createElement(O,{id:"signup"}),o.a.createElement(S,null))}}]),t}(a.Component)),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(o.a.createElement(_,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/no-amazon-hq2",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/no-amazon-hq2","/service-worker.js");D?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):$(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):$(t,e)})}}()},18:function(e,t,n){e.exports=n.p+"static/media/hq2-frowny-face-01.4d3b2996.png"},19:function(e,t,n){e.exports=n.p+"static/media/take-action.50789996.jpg"},22:function(e,t,n){},39:function(e,t,n){e.exports=n.p+"static/media/twitter.b695c147.png"},40:function(e,t,n){e.exports=n.p+"static/media/facebook.a60e6562.png"},41:function(e,t,n){e.exports=n(106)},46:function(e,t,n){},50:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){},84:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){},99:function(e,t,n){}},[[41,2,1]]]);
//# sourceMappingURL=main.851e2bc9.chunk.js.map