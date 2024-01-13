const { connect } = require('mongoose');

const dbConnect = () => {
    connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database connection successful');
    }).catch(err => {
        console.error('Database connection error:', err);
    });
}

module.exports = dbConnect;