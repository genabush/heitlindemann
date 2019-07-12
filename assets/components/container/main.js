const { InnerBlocks } = wp.editor;
const { registerBlockType } = wp.blocks;

registerBlockType('gutenberguest/crisp-container', {
    title: 'Container section',

    category: 'layout',

    edit() {
        return (
            <div className="container">
                <InnerBlocks />
            </div>
        );
    },

    save({ attributes }) {
        return (
            <section className={ attributes.className }>

                <InnerBlocks.Content />

            </section>
        );
    }

});