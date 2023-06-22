// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import issue from './issue'
import blockContent from './blockContent'
import blockArticle from './blockArticle'
import settings from './settings'
import editorial from './editorial'
import family from './family'
import search from './search'
import family_list from './family_list'
import category from './category'
import home from './home'
import homeBooking from './booking/homeBooking'
import bookingList from './booking/bookingList'
import blogComponent from './blogComponent'
import carousselComponent from './carousselComponent'
import videoComponent from './videoComponent'
import galleryComponent from './galleryComponent'
import article from './article'
import member_list from './member_list'
import header from './header'
import footer from './footer'
import blockIssue from './blockIssue'
import blockQuote from './blockQuote'
import blockCover from './blockCover'
import blockColumn from './booking/blockColumn'
import blockEditor from './booking/blockEditor'
import blockPopup from './booking/blockPopup'
import homeNxt from './nxt/homeNxt'
import menu from './nxt/menu'
import menuComponent from './menuComponent'
import blockMenu from './blockMenu'
import facilitiesList from './nxt/facilitiesList'
import collaboratorList from './nxt/collaboratorList'
import collaborator from './nxt/collaborator'
import eventList from './nxt/eventList'

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
    search,
    family_list,
    category,
    home,
    homeNxt,
    menu,
    facilitiesList,
    collaborator,
    collaboratorList,
    eventList,
    homeBooking,
    bookingList,
    blogComponent,
    menuComponent,
    carousselComponent,
    videoComponent,
    galleryComponent,
    article,
    member_list,
    header,
    footer,
    blockContent,
    blockArticle,
    blockMenu,
    blockIssue,
    blockQuote,
    blockCover,
    blockColumn,
    blockEditor,
    blockPopup,
  ]),
})
