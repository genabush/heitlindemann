<?php $attributes = get_query_var('post_snapshot_attributes'); ?>

<?php if($attributes['selectedPost']) : ?>
<div class="container">
    <?php
    $post = get_post($attributes['selectedPost']);
    $link = get_post_meta($post->ID, 'snapshot_link', true);

    if(empty($link)) {
        $link = get_the_permalink($post);
    }

    ?>
    <div class="post">
        <img class="post__img" src="<?php echo get_the_post_thumbnail_url($post) ?>" alt="post-img">
        <div class="post__description">
            <p class="post__text"><?php echo get_the_excerpt($post) ?></p>
            <a href="<?php echo $link ?>" class="post__link">
                <?php printf('» %s %s', __('LINK ZUM'), $post->post_title) ?>
            </a>
        </div>
    </div>
</div>
<?php endif; ?>