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
import collaborator from './nxt/collaborator'
import collaboratorList from './nxt/collaboratorList'
import eventList from './nxt/eventList'
import event from './nxt/event'
import visit from './nxt/visit'
import blockCenter from './blockCenter'
import blockCoverNxt from './blockCoverNxt'
import blockVisitContent from './blockVisitContent'
import facilities from './nxt/facilities'
import blockVisit from './blockVisit'
import shopifyProducts from './shop/products'
import footerShop from './shop/footerShop'
import settingsShop from './shop/settingsShop'
import blockShop from './shop/block/blockShop'
import blockBanner from './shop/block/blockBanner'
import privacyPolicy from './shop/privacyPolicy'
import termsConditions from './shop/termsConditions'
import faq from './shop/faq'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    issue,
    settings,
    settingsShop,
    editorial,
    family,
    search,
    family_list,
    category,
    home,
    homeNxt,
    menu,
    facilities,
    facilitiesList,
    collaborator,
    collaboratorList,
    event,
    eventList,
    shopifyProducts,
    privacyPolicy,
    termsConditions,
    faq,
    visit,
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
    footerShop,
    blockContent,
    blockCenter,
    blockArticle,
    blockMenu,
    blockIssue,
    blockQuote,
    blockCover,
    blockCoverNxt,
    blockVisit,
    blockVisitContent,
    blockColumn,
    blockEditor,
    blockPopup,
    blockShop,
    blockBanner
  ]),
})
