/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("90wdesv2rjb9cnj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bhpgjld9",
    "name": "imagen",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("90wdesv2rjb9cnj")

  // remove
  collection.schema.removeField("bhpgjld9")

  return dao.saveCollection(collection)
})
