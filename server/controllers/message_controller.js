let messages = [];
let id = 0;

const create = (req, res, next) => {
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.json(messages);
}

const read = (req, res, next) => {
    res.json(messages);
}

const update = ( req, res ) => {
    const { text } = req.body;
    const userID = req.params.id;
    const mIndex = messages.findIndex( message => message.id == userID );
    let message = messages[ mIndex ];

    messages[ mIndex ] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };

    res.status(200).send( messages );
}


const destroy = (req, res, next) => {
    const destroyID = req.params.id;
    mIndex = messages.findIndex(message => message.id == destroyID);
    messages.splice(mIndex, 1);
    res.json(messages);
}

module.exports = {
    create,
    read,
    update,
    destroy,
};