class SubmissionSerializer < ActiveModel::Serializer
  attributes :id, :language, :codeBlock, :translation
end
