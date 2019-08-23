'use strict';

const mongoose = require('mongoose');
const { Schema, SchemaTypes } = mongoose;

exports.collectionName = 'documentVersions';
exports.modelName = 'DocumentVersion';

exports.getSChema = function documentVersionSchemaFactory({ userModelName }) {
  const DocumentVersionSchema = new Schema({
    document: {
      type: SchemaTypes.ObjectId,
      ref: 'Document',
      index: true,
      required: true,
    },
    versionNumber: {
      type: Number,
      required: true,
    },
    versionDescription: {
      type: String,
      trim: true,
      required: true,
    },
    storage: {
      engine: {
        type: String,
        enum: ['S3'],
        required: true,
      },
      uri: {
        type: String,
        required: true,
      },
    },
    uploadedAt: {
      type: Date,
      required: true,
    },
    uploadedBy: {
      type: SchemaTypes.ObjectId,
      ref: userModelName,
      index: true,
      required: true,
    },
  });

  return DocumentVersionSchema;
};
