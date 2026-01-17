const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const User = require('./models/User');
const Product = require('./models/Product');
const categoriesRouter = require('./routes/categories');
const userRouter = require('./routes/user');


async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/asm_dev');
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!', error);
    }
}
connect();

//static files
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); // Thêm dòng này để xử lý JSON body cho API
app.use(methodOverride('_method'));

//HTTP logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', engine({ 
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes
app.use('/api/categories', categoriesRouter);
app.use('/users', userRouter);

app.get('/', async (req, res) => {
    try {
        const users = await User.find({}).lean();
        res.render('home', { users });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/views', (req, res) => {
    res.render('new');
});

// // local host



app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

// app.get('/api/categories', async (req, res) => {
//     try {
//         const categories = await Category.find({}).lean();
//         res.json(categories);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });
// app.post('/api/categories', async (req, res) => {
//     try {
//         const category = new Category(req.body);
//         await category.save();
//         res.status(201).json(category);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// }); 

// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find({}).lean();
//         res.json(products);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });