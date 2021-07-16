import { Controller } from "stimulus"

export default class extends Controller {
  // This is called on form when we want to reset the input
  // <%= form_with ..., html: { 'data-controller': 'reset-form', 'data-action': 'turbo:submit-end->forms#reset' } do |f| %>
  reset() {
    this.element.reset()
  }
}
