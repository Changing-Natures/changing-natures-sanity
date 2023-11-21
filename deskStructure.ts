// ICONS
import {
    MdPlace,
    MdViewInAr,
    MdSettings,
    MdListAlt,
    MdSlideshow,
    MdSync,
} from "react-icons/md"

export default (S: any) =>
    S.list()
        .title("Changing Natures")
        .items([
            S.listItem()
                .title("Sync")
                .icon(MdSync)
                .child(
                    S.editor()
                        .id("syncDatabase")
                        .title("Sync")
                        .schemaType("SyncDatabase")
                        .documentId("syncDatabase")
                ),
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
                .title("Story Scenes")
                .icon(MdSlideshow)
                .child(
                    S.documentList()
                        .title('Scenes')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "storyScene" })
                ),
        ])
