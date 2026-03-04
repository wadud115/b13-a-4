
1..
 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementsByClassName() returns a live collection of elements with the same class name.

querySelector() returns the first element that matches a CSS selector.

querySelectorAll() returns all elements that match a CSS selector as a NodeList.


2..
How do you create and insert a new element into the DOM?
First create an element using createElement(), then add content and insert it using append() or appendChild().

3..
What is Event Bubbling?
Event Bubbling is a process where an event triggered on a child element automatically propagates upward to its parent elements.

4..
What is Event Delegation in JavaScript? Why is it useful?
Event Delegation means handling events on child elements by adding a single listener to their parent. It is useful because it reduces memory usage and supports dynamically created elements.

5.. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() cancels the default action of an element (for example, stopping a link from opening).

stopPropagation() prevents the event from moving to parent elements during bubbling.
