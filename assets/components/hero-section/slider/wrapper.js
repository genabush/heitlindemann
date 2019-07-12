const { InnerBlocks } = wp.editor;
const { registerBlockType } = wp.blocks;

const allowedSlideBlocks = ['gutenberguest/hero-section-slider-slide'];

registerBlockType('gutenberguest/hero-section-slider-wrapper', {
    title: 'Hero Section Slider',

    category: 'layout',

    edit({ attributes, className, setAttributes }) {
        return (
            <div className="container">
                <InnerBlocks allowedBlocks={ allowedSlideBlocks } />
            </div>
        );
    },

    save({ attributes }) {
        return (
            <div>
                <div className="main-slider__inner">
                    <InnerBlocks.Content />
                </div>
                <div className="container">
                    <div class="dots-container"></div>
                </div>
            </div>
        );
    }

});