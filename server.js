let aragorn = {
	id: 0,
	name: "Aragorn's Orc BBQ",
	min_order: 20,
	delivery_fee: 5,
	menu: {
		"Appetizers": {
			0: {
				name: "Orc feet",
				description: "Seasoned and grilled over an open flame.",
				price: 5.50
			},
			1: {
				name: "Pickled Orc fingers",
				description: "Served with warm bread, 5 per order.",
				price: 4.00
			},
			2: { //Thank you Kiratchii
				name: "Sauron's Lava Soup",
				description: "It's just really spicy water.",
				price: 7.50
			},
			3: {
				name: "Eowyn's (In)Famous Stew",
				description: "Bet you can't eat it all.",
				price: 0.50
			},
			4: {
				name: "The 9 rings of men.",
				description: "The finest of onion rings served with 9 different dipping sauces.",
				price: 14.50
			}
		},
		"Combos": {
			5: {
				name: "Buying the Farm",
				description: "An arm and a leg, a side of cheek meat, and a buttered biscuit.",
				price: 15.99
			},
			6: {
				name: "The Black Gate Box",
				description: "Lots of unidentified pieces. Serves 50.",
				price: 65.00
			},
			7: {//Thanks to M_Sabeyon
				name: "Mount Doom Roast Special with Side of Precious Onion Rings.",
				description: "Smeagol's favorite.",
				price: 15.75
			},
			8: { //Thanks Shar[TA]
				name: "Morgoth's Scorched Burgers with Chips",
				description: "Blackened beyond recognition.",
				price: 13.33
				
			},
			10: {
				name: "Slab of Lurtz Meat with Greens.",
				description: "Get it while supplies last.",
				price: 17.50
			},
			11: {
				name: "Rangers Field Feast.",
				description: "Is it chicken? Is it rabbit? Or...",
				price: 5.99
			}
		},
		"Drinks": {
			12: {
				name: "Orc's Blood Mead",
				description: "It's actually raspberries - Orc's blood would be gross.",
				price: 5.99
			},
			13: {
				name: "Gondorian Grenache",
				description: "A fine rose wine.",
				price: 7.99
			},
			14: {
				name: "Mordor Mourvedre",
				description: "A less-fine rose wine.",
				price: 5.99
			}
		}	
	}
}

let legolas = {
	id: 1,
	name: "Lembas by Legolas",
	min_order: 15,
	delivery_fee: 3.99,
	menu: {
		"Lembas": {
			0: {
				name: "Single",
				description: "One piece of lembas.",
				price: 3
			},
			1: {
				name: "Double",
				description: "Two pieces of lembas.",
				price: 5.50
			},
			2: { 
				name: "Triple",
				description: "Three pieces, which should be more than enough.",
				price: 8.00
			}
		},
		"Combos": {
			3: {
				name: "Second Breakfast",
				description: "Two pieces of lembas with honey.",
				price: 7.50
			},
			4: {
				name: "There and Back Again",
				description: "All you need for a long journey - 6 pieces of lembas, salted pork, and a flagon of wine.",
				price: 25.99
			},
			5: {
				name: "Best Friends Forever",
				description: "Lembas and a heavy stout.",
				price: 6.60
			}
		}
	}
}

let frodo = {
	id: 2,
	name: "Frodo's Flapjacks",
	min_order: 35,
	delivery_fee: 6,
	menu: {
		"Breakfast": {
			0: {
				name: "Hobbit Hash",
				description: "Five flapjacks, potatoes, leeks, garlic, cheese.",
				price: 9.00
			},
			1: {
				name: "The Full Flapjack Breakfast",
				description: "Eight flapjacks, two sausages, 3 eggs, 4 slices of bacon, beans, and a coffee.",
				price: 14.00
			},
			2: { 
				name: "Southfarthing Slammer",
				description: "15 flapjacks and 2 pints of syrup.",
				price: 12.00
			}
			
		},
		"Second Breakfast": {
			3: {
				name: "Beorning Breakfast",
				description: "6 flapjacks smothers in honey.",
				price: 7.50
			},
			4: {
				name: "Shire Strawberry Special",
				description: "6 flapjacks and a hearty serving of strawberry jam.",
				price: 8
			},
			5: {
				name: "Buckland Blackberry Breakfast",
				description: "6 flapjacks covered in fresh blackberries. Served with a large side of sausage.",
				price: 14.99
			}
		},
		"Elevenses": {
			6: {
				name: "Lembas",
				description: "Three pieces of traditional Elvish Waybread",
				price: 7.70
			},
			7: {
				name: "Muffins of the Marish",
				description: "A variety of 8 different types of muffins, served with tea.",
				price: 9.00
			},
			8: {
				name: "Hasty Hobbit Hash",
				description: "Potatoes with onions and cheese. Served with coffee.",
				price: 5.00
			}
		},
		"Luncheon": {
			9: {
				name: "Shepherd's Pie",
				description: "A classic. Includes 3 pies.",
				price: 15.99
			},
			10: {
				name: "Roast Pork",
				description: "An entire pig slow-roasted over a fire.",
				price: 27.99
			},
			11: {
				name: "Fish and Chips",
				description: "Fish - fried. Chips - nice and crispy.",
				price: 5.99
			}
		},
		"Afternoon Tea": {
			12: {
				name: "Tea",
				description: "Served with sugar and cream.",
				price: 3
			},
			13: {
				name: "Coffee",
				description: "Served with sugar and cream.",
				price: 3.50
			},
			14: {
				name: "Cookies and Cream",
				description: "A dozen cookies served with a vat of cream.",
				price: 15.99
			},
			15: {
				name: "Mixed Berry Pie",
				description: "Fresh baked daily.",
				price: 7.00
			}
		},
		"Dinner": {
			16: {
				name: "Po-ta-to Platter",
				description: "Boiled. Mashed. Stuck in a stew.",
				price: 6
			},
			17: {
				name: "Bree and Apple",
				description: "One wheel of brie with slices of apple.",
				price: 7.99
			},
			18: {
				name: "Maggot's Mushroom Mashup",
				description: "It sounds disgusting, but its pretty good",
				price: 6.50
			},
			19: {
				name: "Fresh Baked Bread",
				description: "A whole loaf of the finest bread the Shire has to offer.",
				price: 6
			},
			20: {
				name: "Pint of Ale",
				description: "Yes, it comes in pints.",
				price: 5
			}
		},
		"Supper": {
			21: {
				name: "Sausage Sandwich",
				description: "Six whole sausages served on a loaf of bread. Covered in onions, mushrooms and gravy.",
				price: 15.99
			},
			22: {
				name: "Shire Supper",
				description: "End the day as you started it, with a dozen flapjacks, 5 eggs, 3 sausages, 7 pieces of bacon, and a pint of ale.",
				price: 37.99
			}
		}
	}
}

const restaurantData = {
    "Aragon's Orc BBQ": aragorn,
    "Lembas by Legolas": legolas,
    "Frodo's Flapjacks": frodo 
};

const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3000; //change here if needed

//initializing our users and mongo connection via mongoose
mongoose.connect("mongodb://localhost:27017/a4");
const db = mongoose.connection;
db.on("error", (err) => {
    console.error("Mongo connection error:", err);
});
db.once("open", () => {
    console.log("Connected to MongoDB via Mongoose");
});
//defining the structures for Order and User documents in MongoDB
const userSchema = new mongoose.Schema({
    username: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    privacy: {type:Boolean, default:false}
}, {collection: "users"}); //match existing collection name

const orderSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true //storing user Id, telling mongoose this references the user model
		// making sure every order must belong to a user with required:true
	},
	//order metaData
	restaurantId: Number,
	restaurantName: String,
	//money fields in dollars
	subTotal: Number,
	tax: Number,
	fee: Number,
	total:Number,

	items: [
		{
			itemId: Number,
			name: String,
			quantity: Number
		}
	],

	createdAt: {
		type: Date,
		default: Date.now //if createdAt not provided, use now automatically
	}
}, {collection: "orders"});

const Order = mongoose.model("Order", orderSchema);
const User = mongoose.model("User", userSchema);

//setting PUG template
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//setting static files
//+ middleware for JSON urlencoded (html form) and sessions
app.use(express.static(path.join(__dirname, "public")));

//JSON + form parsing setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	session({
		secret: "mysecretshhhh",
		resave: false, //dont save the session again if it aint tampered vro
		saveUninitialized: false, //dont create a session until we store smth in req.session (no random cookies)
		cookie: {
			maxAge: 1000 * 60 * 60 * 2 //total cookie time in ms ie 2 hours
		}
	})
);
app.use((req, res, next) => {
	//making the session user available in all pug views as currentUser
	//res.locals used for pug views, adding .currentUser to it creates currentUser
	res.locals.currentUser = req.session.user || null;
	next(); //important, otherwise browser runs around in circles
});
function requireLogin(req, res, next){
	if(!req.session.user){
		//not logged in so we tell them hey, login
		return res.redirect("/login");
	}
	next();
}

//GET requests
app.get("/", (req, res) => {
    res.redirect("/orders");
});

app.get("/orders", requireLogin, (req, res) => {
    res.render("orderform");
});

app.get("/orders/:orderId", requireLogin, async (req, res) => {
	try{
		const sessionUser = req.session.user;
		const orderId = req.params.orderId;

		const order = await Order.findById(orderId).lean();
		if(!order){
			return res.status(404).send("Order not found");
		}

		//only the owner can see their own order details
		if(String(order.user) !== String(sessionUser.id)){
			return res.status(403).send("nono you can't view this order it aint urs");
		}

		res.render("order-detail", {order}); //checkout order-detai.pug to see what it's being used for
	}catch(err){
		
		res.status(500).send("Sever error in loading the order");
	}
});

app.get("/restaurants", (req, res) => { //other stuff will be collected using mongoDb
    res.json(restaurantData);
    res.statusCode = 200;
});

app.get("/users", async (req, res) => {
	try{
		const nameQuery = (req.query.name || "").trim(); //?name= 

		let users = [];

		if(nameQuery){
			//case insensitive conatining match on username
			users = await User.find({
				username: {$regex: nameQuery, $options: "i"} // i means case-insensitive
			}).lean();
		}

		res.render("users", {
			title: "Users", 
			searchName: nameQuery,
			users
		});
	}catch(err){
		console.error("Error in /users GET:", err);
		res.status(500).send("Server error while searching users");
	}
});

app.get("/users/:id", requireLogin, async (req, res) =>{
	try{
		const requestedId = req.params.id;
		const sessionUser = req.session.user;

		//loding user from dataBase
		const user = await User.findById(requestedId).lean() //.lean() return a js object
		if(!user){
			return res.status(404).send("User Not Found");
		}

		const isOwner = sessionUser && String(sessionUser.id) === String(user._id);

		//privacy check
		if(user.privacy && !isOwner){
			return res.status(403).send("This profile is private");
		}

		const orders = await Order
			.find({user: requestedId})
			.sort({createdAt: -1}) //descending order ie newest first
			.lean();

		//render profile.pug
		res.render("profile", {
			profileUser: user,
			isOwner,
			orders
		});
	}catch(err){
		console.error("Error in GET /users/:id", err);
		res.status(500).send("Server error on profile page:");
	}
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
	res.render("login");
});

app.get("/logout", (req, res) => {
	req.session.destroy(err => {
		if(err){
			console.error("Error destroying session:", err);
		}
		res.redirect("/login");
	});
});

//POST requests
app.post("/orders", requireLogin, async (req, res) => {
	try{
		const sessionUser = req.session.user; //{id, username, privacy}
		const info = req.body //what submitOrder is sending 

		//converting info.order which is keyed by itemId into an array
		const itemsArray = Object.entries(info.order || {}).map(([id, value]) => ({
			itemId: Number(id),
			name: value.name,
			quantity: value.quantity
		}));

		const orderDoc = new Order({
			user: sessionUser.id,
			restaurantId: info.restaurantId,
			restaurantName: info.restaurantName,
			subtotal: info.subTotal,
			tax: info.tax,
			fee: info.fee,
			total:info.total,
			items: itemsArray
		});

		await orderDoc.save();

		///sending the JSON data back for the AJAX handler we wrote
		res.status(201).json({
			message: "Order Saved",
			orderId: orderDoc._id
		});
	}catch(err){
		console.error("Error in POST /orders:", err);
		res.status(500).json({message: "Server error saving da order"});
	}
});

app.post("/register", async (req, res) => {
    const {username, password} = req.body;

    /*console.log(`Username is ${username} and password is ${password}`);
    res.status(200);
    res.end();  previous code i wrote to create the app.post before doing mongoose*/
    
    if(!username || !password){
        return res.status(400).render("register", {
            error: "Username and password are required"
            //taking advantage of the dynamic principlality of pug
            //if err will be included in it for register.pug
        });
    }

    try{
        //checking for duplicatees
        const existing = await User.findOne({username: username});

        if(existing){
            //staying on register page with error
            return res.status(409).render("register", {
                error: "That username is already taken"
            });
        }

        //creating new user with privacy false, and 0 orders
        const newUser = new User({
            username,
            password,
            privacy: false,
        });

        await newUser.save();

        res.status(201).send(`User ${newUser.username} registered.`);
    }catch(err){
        console.error("Error in /register POST:", err);
        res.status(500).render("register", {
            error: "Server error. Try again brodie"
        });
    }

});

app.post("/login", async (req, res) => {
    const {username, password} = req.body;

    if(!username || !password){
        return res.status(400).render("login", {
            error: "Username and password are required"
        });
    }

    try{
        //checking for duplicatees
        const user = await User.findOne({username});
	

        if(!user){
			return res.render("login", {error: "User Not Found"});
        }
		
		if(user.password !== password){
			return res.render("login", {error: "Incorrect Password"});
		}

		//Success now storing session
		req.session.user = {
			id: user._id,
			username: user.username,
			privacy: user.privacy
		};

		res.redirect(`/users/${req.session.user.id}`);

    }catch(err){
        console.error("Login Error:", err);
        res.status(500).render("login", {
            error: "Server error. Try again brodie"
        });
    }
});

app.post("/users/:id/privacy", requireLogin, async(req, res) => {
	try{
		const requestedId = req.params.id;
		const sessionUser = req.session.user;
		

		//console.log("requestedId:", requestedId, typeof requestedId);
		//console.log("sessionUser.id:", sessionUser.id, typeof sessionUser.id);
		//console.log("compare:", String(sessionUser.id) === String(requestedId));
		// the if statement was just firing, so i had to debug lol
		
		if(!sessionUser || String(sessionUser.id)  !== String(requestedId)){
			//just in case somehow someway a person tried to change someone else's prof
			return res.status(403).send("HEY U CANT CHANGE THIS PROFILE IT AINT URS");
		}

		//checkbox sends on when checked and undefined otherwise
		const makePrivate = req.body.privacy === "on";

		await User.findByIdAndUpdate(requestedId, {privacy: makePrivate});

		//updaint session copy too
		req.session.user.privacy = makePrivate;

		res.redirect(`/users/${requestedId}`);
	}catch(err){
		console.error("Error in POST /users/:id/privacy", err);
		res.status(500).send("Server error");
	}
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

