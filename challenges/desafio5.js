// recebi ajuda do caribé

db.voos.find({}, { _id: false, vooId: true }).skip(9).limit(3);