<?php
/**
 * @file
 * Template.php.
 *
 * Functions.
 *
 */
function cronosz_menu_link(array $variables) {
  $element = $variables['element'];
  $sub_menu = '';

  if ($element['#below']) {
    $sub_menu = drupal_render($element['#below']);
  }

  if (empty($element['#localized_options'])) {
    $element['#localized_options'] = array();
  }
