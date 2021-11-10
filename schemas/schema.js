// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import issue from './issue'
import blockContent from './blockContent'
import blockOrange from './blockOrange'
import blockWhite from './blockWhite'
import settings from './settings'
import editorial from './editorial'
import family from './family'
import social from './social'
import search from './search'
import family_list from './family_list'
import blog from './blog'
import caroussel from './caroussel'
import gallery from './gallery'
import video from './video'
import category from './category'
import home from './home'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    issue,
    settings,
    editorial,
    family,
    social,
    search,
    family_list,
    blog,
    caroussel,
    gallery,
    video,
    category,
    home,
    blockContent,
    blockOrange,
    blockWhite
  ]),
})
