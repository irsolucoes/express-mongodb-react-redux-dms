'use strict';

const mongoose = require('mongoose');
const { Schema, SchemaTypes } = mongoose;

exports.collectionName = 'documents';
exports.modelName = 'Document';

exports.getSChema = function documentSchemaFactory() {
  const DocumentSchema = new Schema({
    title: {
      type: String,
      trim: true,
      required: true,
    },
    documentType: {
      type: SchemaTypes.ObjectId,
      ref: 'DocumentType',
      index: true,
      required: true,
    },
    filename: {
      type: String,
      trim: true,
      required: true,
    },
    metadata: {},
    tags: [String],
    currentVersion: {
      type: SchemaTypes.ObjectId,
      ref: 'DocumentVersion',
      index: true,
    },
  });

  return DocumentSchema;
};
