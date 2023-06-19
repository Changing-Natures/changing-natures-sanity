// ICONS
import {
    MdPlace,
    MdViewInAr,
    MdSettings,
    MdListAlt,
    MdSlideshow,
} from "react-icons/md"

export default (S) =>
    S.list()
        .title("Changing Natures")
        .items([
            S.listItem()
                .title("Settings")
                .icon(MdSettings)
                .child(
                    S.editor()
                        .id("settings")
                        .title("Settings")
                        .schemaType("settings")
                        .documentId("settings")
                ),
            S.listItem()
                .title("Locations")
                .icon(MdPlace)
                .child(
                    S.documentList()
                        .title('Locations')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "location" })
                ),
            S.listItem()
                .title("Collection items")
                .icon(MdViewInAr)
                .child(
                    S.documentList()
                        .title('Collection items')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "collectionItem" })
                        .defaultOrdering([{ field: 'isAvailable', direction: 'asc' }, { field: '_createdAt', direction: 'desc' }])
                ),
            S.divider(),
            S.listItem()
                .title("Sequences")
                .icon(MdListAlt)
                .child(
                    S.documentList()
                        .title('Sequences')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "sequence" })
                ),
            S.listItem()
                .title("Slides")
                .icon(MdSlideshow)
                .child(
                    S.documentList()
                        .title('Slides')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "slide" })
                ),
        ])
