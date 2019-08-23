'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

exports.collectionName = 'documentTypes';
exports.modelName = 'DocumentType';

exports.getSChema = function documentTypeSchemaFactory() {
  const DocumentTypeSchema = new Schema({
    title: {
      type: String,
      trim: true,
      required: true,
    },
    filenameTemplate: {
      type: String,
      trim: true,
      required: true,
    },
    fileType: {
      type: String,
      enum: ['Image', 'Text'],
      required: true,
    },
    metadataDefinition: [
      {
        label: {
          type: String,
          trim: true,
          required: true,
        },
        property: {
          type: String,
          trim: true,
          required: true,
        },
        propertyType: {
          type: String,
          enum: ['Text', 'Number', 'List'],
          required: true,
        },
      },
    ],
  });

  return DocumentTypeSchema;
};
