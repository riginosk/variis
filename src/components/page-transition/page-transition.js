import React, { Component } from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import gsap from 'gsap';
import BezierEasing from 'bezier-easing';

class Transition extends Component {
 
  animateOut(exit, node) {

    const easing = BezierEasing(0.8, 0, 0.2, 1);
    const time = 0.7;
    const transitionWipe = 
   `<div class="transition">
 <div class="transition__container" style="background: #000"></div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend',transitionWipe);


    gsap.timeline()
    .to('.transition', {duration: time, height:"100%", transformOrigin: 'bottom', ease:easing})
  }

  animateIn(entry, node) {

    const easing = BezierEasing(0.8, 0, 0.2, 1);
    const time = 0.7;
  
    function removeElement(element) {
      if (typeof(element) === "string") {
        element = document.querySelector(element);
      }
      return function() {
        element.parentNode.removeChild(element);
      };
    }


    gsap.timeline()
    .to('.transition__container', {duration: time, height:0, transformOrigin: 'top', ease:easing, delay:0.3})
    .call(removeElement(".transition"))

  }

  render() {
    return (
      <>
        <TransitionLink preventScrollJump className = {this.props.className}
          to={this.props.to}
          exit={{
            length: 0.7,
            delay: 0,    
            trigger: ({ exit, node }) => this.animateOut(exit, node),
        
          }}
          entry={{
            delay: 0.7,
            trigger: ({ entry, node }) => this.animateIn(entry, node),
          }}
        >
          {this.props.children}
        </TransitionLink>

      </>
    );
  }
}

export default Transition;
