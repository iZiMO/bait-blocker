// node UpworthyGenerator.js

var Upworthy = {
	
	headlineStructures : [
		// You [won't believe] the [two sentences] this [new mom] [says]
		"You %imploreaudio% the %creationadjective% %creationaudio% this %actoradjective% %actor% %createdsynonym%",
		"You %implorevisual% the %creationadjective% %creationvisual% this %actoradjective% %actor% %createdsynonym%",
		"Here is what happens when a %actor% %action%",
		"That moment when a %actor% %action%",
		"I wish I was more %pasttenseshocked% by what a %actoradjective% %actor% %revealed%, but I'm not",
		"What happens when one %actoradjective% %actor% %action%",
		"Try not to %yourreaction% when you %verbaudio% %audiofragmentwitharticle%",
		"You will %yourreaction% when you see what a %actoradjective% %actor% %createdsynonym%",
		"Think %preconception%? Maybe you should listen to this %actoradjective% %actor%",
		"Some call it %positivethingwitharticle%. They call it %negativethingwitharticle%",
		"I thought it was %negativethingwitharticle%. But then I saw this %creationadjective% %creationvisual%",
		"I'll never look at this %actoradjective% %actor% the same way again",
		"If you can watch this and not feel %pasttenseshocked%, then %youremadeofstone%",
		"What this %actoradjective% %actor% did is genius",
		"Listen to %audiofragmentwitharticle% and try to tell me %preconception%",
		"Watch a %actoradjective% %actor% become a %greatperson% with %creationaudio%",
		"Before you say %preconception%, listen to %audiofragmentwitharticle% from a %actor%",
		"My %jawhitthefloor% after hearing %audiofragmentwitharticle%"
	],

	fibContent : {

		jawhitthefloor : [
			"jaw hit the floor",
			"heart broke",
			"head hurt",
			"heart is breaking",
			"brain exploded",
			"stomach sank",
			"tears keep flowing",
			"faith in humanity shattered",
			"hope for the world plummeted",
			"faith in humanity soared",
			"confidence in the next generation is stronger than ever",
			"disgust hit new lows"
		],
		
		greatperson : [
			"hero",
			"inspiration",
			"role model",
			"legend"
		],

		youremadeofstone:[
			"you're made of stone",
			"you have no emotions",
			"you are stronger than I am",
			"you are made of ice",
			"you have a heart of coal"
		],

		positivethingwitharticle: [
			"the solution to world peace",
			"just another day",
			"the miracle of life",
			"the key to happiness",
			"a miracle",
			"a godsend",
			"the greatest thing that's ever happened",
			"the solution to climate change",
			"the answer to all our prayers",
			"what we've been waiting for",
			"the answer to world hunger",
			"the cure for childhood obesity",
			"a miracle drug",
			"a masterpiece",
			"the end of polio",
			"the cure for cancer",
			"the key to peace in the Middle East",
			"the end of all wars",
			"a victory against homophobia",
			"the end of racism"
		],

		negativethingwitharticle : [
			"an inescapable curse",
			"a living nightmare",
			"the worst-case scenario",
			"the world's greatest tragedy",
			"a killer of children",
			"a travesty",
			"a menace to equality",
			"a homophobic nightmare",
			"education's enemy",
			"a deadly poison",
			"a silent genocide",
			"the worst kind of discrimination",
			"an ecological disaster",
			"a disaster",
			"a threat to all of us"
		],

		preconception : [
			"discrimination is over",
			"America is the best country",
			"Africa is getting better",
			"partisian politics are killing America",
			"we're winning the war on terror",
			"the economy is better",
			"America's disparity in income is all bad",
			"babies can't be racist",
			"there aren't pedophiles in your neighborhood",
			"things are better than they used to be",
			"things used to be better when you were a kid",
			"polio isn't a threat in the US",
			"you're not racist",
			"you're not homophobic",
			"you've never discriminated against someone",
			"you're not a misogynist",
			"homophobia is on the decline",
			"babies can't be homophobic",
			"computers made the world a better place",
			"you're not addicted to your cell phone",
			"we're not in a housing bubble",
			"you have job security",
			"you could never die in a fire"
		],

		yourreaction : [
			"let your jaw hit the floor",
			"gasp",
			"get angry",
			"lose your breath",
			"cry",
			"weep",
			"scream",
			"dig your fingernails into your desk",
			"punch your monitor",
			"do a double take",
			"shout with rage",
			"groan",
			"roll your eyes",
			"get upset",
			"be mortified",
			"rage"
		],

		verbaudio : [
			"hear",
			"listen to"
		],

		audiofragmentwitharticle : [
			"this one word",
			"these two sentences",
			"these six words",
			"this one statement",
			"this one sentence",
			"this one question",
			"these two questions",
			"these five words",
			"this one declaration",
			"these two words",
			"the second half of the third sentence",
			"the fifth and seventh words",
			"the first word and the last word",
			"the second sentence",
			"these twelve words",
			"this battlecry",
			"these five nouns",
			"this one verb",
			"the eighth word",
			"the first word and the second sentence",
			"the third question",
			"these nine words",
			"the last sentence"
		],

		pasttenseshocked : [
			"surprised",
			"revolted",
			"outraged",
			"disgusted",
			"depressed"
		],

		revealed : [
			"revealed",
			"exposed",
			"documented",
			"proved",
			"publicized"
		],

		// You _______ the two sentences
		imploreaudio : [
			"won't believe",
			"have to hear",
			"don't want to have to think about",
			"should really think about listening to",
			"don't want to hear",
			"absolutely have to listen to",
			"won't really understand what's happening in the world until you hear",
			"need to drop everything and hear",
			"can't imagine",
			"can't fathom",
			"can't begin to understand"
		],

		implorevisual : [
			"won't believe",
			"need to see",
			"should really think about watching",
			"can't imagine",
			"can't fathom",
			"can't begin to understand"
		],

		creationvisual : [
			"short film",
			"music video",
			"twenty second video",
			"ten second video",
			"vlog",
			"one minute video",
			"fifty second video",
			"forty second video"
		],

		creationaudio : [
			"one word",
			"two sentences",
			"three sentences",
			"five words",
			"two words",
			"three words",
			"four words",
			"three sentences",
			"one question",
			"one declaration",
			"six words",
			"ten words",
			"two words and a question"

		],

		creationadjective : [
			"hilarious",
			"mindblowing",
			"scarily-accurate",
			"heartwrenching",
			"tearjerking",
			"saddening",
			"shocking",
			"amazing",
			"awe-inspiring",
			"troubling",
			"jaw-dropping",
			"brain-exploding",
			"tear-inducing",
			"outrageous",
			"pioneering",
			"revolutionary",
			"ridiculous",
			"sobering"
		],

		// The actor. You have to hear the three words this ______ says
		actor: [
			"new mom",
			"seventh-grader",
			"physicist",
			"bullied teen",
			"science teacher",
			"eight year-old",
			"man",
			"woman",
			"comedian",
			"former model",
			"single dad",
			"former drug addict",
			"veteran",
			"Holocaust survivor",
			"trailblazer",
			"mother of three",
			"LGBT activist",
			"NBA coach",
			"converted racist",
			"former klansman",
			"witness to a murder",
			"tween",
			"high schooler",
			"cheerleader",
			"late night host",
			"teacher",
			"actor",
			"oscar winner",
			"millennial",
			"doctor",
			"talk show host",
			"actress",
			"stand-up comedian",
			"child star",
			"beauty queen",
			"model",
			"blogger",
			"mommy blogger",
			"criminologist",
			"sociologist",
			"cancer survivor",
			"cancer patient",
			"father of three",
			"teacher",
			"kindergartener",
			"author",
			"poet",
			"teenager",
			"criminal",
			"convict",
			"police officer",
			"plastic surgeon",
			"mayor",
			"city councilman",
			"senator",
			"animal rights activist",
			"community organizer",
			"music teacher",
			"pianist",
			"director",
			"fashonista"

		],

		actoradjective : [
			"homeless",
			"bullied",
			"disgraced",
			"trailblazing",
			"transgender",
			"fearless",
			"introverted",
			"legendary",
			"forgotten",
			"iconic",
			"disabled",
			"blind",
			"autistic",
			"gay",
			"queer",
			"famous",
			"extroverted",
			"angry",
			"nostalgic",
			"slandered",
			"iconoclastic",
			"outraged",
			"unstoppable",
			"barrier-smashing",
			"unknown",
			"inspiring",
			"",
			"",
			""
		],

		action : [
			"won't give up",
			"doesn't take no for an answer",
			"says what none of us will",
			"lays it all out",
			"talks about the elephant in the room",
			"gets real about the biggest problem in America",
			"refuses to be silent",
			"starts a revolution",
			"doesn't worry about what anyone thinks",
			"stands up to the critics",
			"doesn't accept bullying",
			"throws political correctness out the window",
			"says what we've all thought",
			"speaks up for the voiceless",
			"stands up for the people who can't",
			"knows when it's time to make a stand",
			"won't retreat"
		],

		createdsynonym : [
			"made",
			"wrote",
			"created",
			"found",
			"delighted the internet with",
			"came up with"
		],

		subhead : [
			"Seriously. Incredible.",
			"The good stuff starts at 0:30. Make sure to stick around till 1:34.",
			"I'm still trying to pick my jaw up off the floor.",
			"Get ready to spend the rest of the day trying to pick your jaw up off the floor.",
			"So amazing.",
			"Starts around 1:54. Gets mindblowing around 2:15.",
			"Honestly, I'm speechless.",
			"A first you'll be intrigued. Then you'll be blown away.",
			"Listen closely at 0:23."
		],

		author : [
			{name: "Rory Mankin", pic: 'female1.jpg'},
			{name: "Cory Fellows", pic: 'female2.jpg'},
			{name: "Rajit McAdams", pic: 'male2.jpg'},
			{name: "Craig Henry", pic: 'male3.jpg'},
			{name: "Booker Ellison", pic: 'male1.jpg'}
		]
	},

	picCount : 10,
	picBasename : 'crying',
	picExtension : '.jpg',
	picDirectory : 'videothumbs',


	buildHeadline : function(){
		return this.populateHeadline(this.randomValueFromArray(this.headlineStructures));
	},

	populateHeadline : function(headlineStructure){
		populatedHeadline = headlineStructure.replace(/%(\w+?)%/g, function(a, b){
			//alert(b);
			return(Upworthy.randomValueFromArray(Upworthy.fibContent[b.toLowerCase()]));
		});

		populatedHeadline = populatedHeadline.replace('  ', ' ');

		populatedHeadline = populatedHeadline.replace(/ a ([aeiou])/g, function(a, b){
			return ' an ' + b;
		});

		populatedHeadline = populatedHeadline.replace(/ (\w)/g, function(a, b){
			return " " + b.toUpperCase();
		}) + '.';

		populatedHeadline = populatedHeadline.substr(0,1).toUpperCase() + populatedHeadline.substr(1, populatedHeadline.length);

		return populatedHeadline;
	},

	getRandomPic : function(){
		return this.picDirectory + '/' + this.picBasename + (Math.round(Math.random() * (this.picCount-1)) + 1) + this.picExtension;
	},

	getRandomDescription : function(){
		return this.randomValueFromArray(Upworthy.fibContent.subhead);
	},

	randomValueFromArray : function(array){
		return array[Math.round(Math.random() * (array.length -1))];
	},

	generateArticle : function(){
		return this.buildHeadline();
	}
};


console.log("{\n")
for (i=0; i<100; i++) {
	value = "{\"title\": " + "\"" + Upworthy.generateArticle() + "\"}";
	if (i<100-1) {
		value += ",";
	}
	console.log(value);
}
console.log("}")