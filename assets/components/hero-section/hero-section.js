const { InnerBlocks } = wp.editor;
const { registerBlockType } = wp.blocks;

const heroSectionAllowed = ['gutenberguest/hero-phone', 'gutenberguest/hero-section-slider-wrapper'];

registerBlockType('gutenberguest/hero-section', {
    title: 'Hero Section',

    category: 'layout',

    edit({ attributes, className, setAttributes }) {
        return (
            <div className="container">
                <InnerBlocks allowedBlocks={ heroSectionAllowed } />
            </div>
        );
    },

    save({ attributes }) {
        return (
            <section className={ `${attributes.className} main-slider` }>
                <InnerBlocks.Content />
            </section>
        );
    }

});