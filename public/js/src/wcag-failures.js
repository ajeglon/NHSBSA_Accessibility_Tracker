module.exports = {
  "1-1-1-non-text-content": {
    name: "1.1.1 Non-text Content",
    level: "Level A",
    description: "All non-text content that is presented to the user has a text alternative that serves the equivalent purpose.",
    details: `
      <ul>
        <li><strong>Controls, Input:</strong> If non-text content is a control or accepts user input, then it has a name that describes its purpose. (Refer to Success Criterion 4.1.2 for additional requirements for controls and content that accepts user input.)</li>
        <li><strong>Time-Based Media:</strong> If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to Guideline 1.2 for additional requirements for media.)</li>
        <li><strong>Test:</strong> If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content.</li>
        <li><strong>Sensory:</strong> If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content.</li>
        <li><strong>CAPTCHA:</strong> If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.</li>
        <li><strong>Decoration, Formatting, Invisible:</strong> If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.</li>
      </ul>
    `
  },
  "1.2.1 Audio-only and Video-only (Prerecorded)": {
    name: "1.2.1 Audio-only and Video-only (Prerecorded)",
    level: "Level A",
    description: "For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such",
    details: `
      <ul>
        <li><strong>Prerecorded Audio-only:</strong> An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.</li>
        <li><strong>Prerecorded Video-only:</strong> Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.</li>
      </ul>
    `
  },
  "1.2.2 Captions (Prerecorded)": {
    name: "1.2.2 Captions (Prerecorded)",
    level: "Level A",
    description: "Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such."
  },
  "1.2.3 Audio Description or Media Alternative (Prerecorded)": {
    name: "1.2.3 Audio Description or Media Alternative (Prerecorded)",
    level: "Level A",
    description: "For all prerecorded audio-only and video-only content, audio descriptions are provided that convey the same information as the audio or video."
  },
  "1.2.4 Captions (Live)": {
    name: "1.2.4 Captions (Live)",
    level: "Level AA",
    description: "Captions are provided for all live audio content in synchronized media."
  },
  "1.2.5 Audio Description (Prerecorded)": {
    name: "1.2.5 Audio Description (Prerecorded)",
    level: "Level AA",
    description: "Audio description is provided for all prerecorded video content in synchronized media."
  },
  "1.2.6 Sign Language (Prerecorded)": {
    name: "1.2.6 Sign Language (Prerecorded)",
    level: "Level AAA",
    description: "Sign language interpretation is provided for all prerecorded audio content in synchronized media."
  },
  "1.2.7 Extended Audio Description (Prerecorded)": {
    name: "1.2.7 Extended Audio Description (Prerecorded)",
    level: "Level AAA",
    description: "Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media."
  },
  "1.2.8 Media Alternative (Prerecorded)": {
    name: "1.2.8 Media Alternative (Prerecorded)",
    level: "Level AAA",
    description: "An alternative for time-based media is provided for all prerecorded synchronized media and for all prerecorded video-only media."
  },
  "1.2.9 Audio-only (Live)": {
    name: "1.2.9 Audio-only (Live)",
    level: "Level AAA",
    description: "For all live audio-only content, a text alternative is provided. An alternative for time-based media that presents equivalent information for live audio-only content is provided."
  },
  "1-3-1-info-and-relationships": {
    name: "1.3.1 Info and Relationships",
    level: "Level A",
    description: "Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text."
  },
  "1-3-2-meaningful-sequence": {
    name: "1.3.2 Meaningful Sequence",
    level: "Level A",
    description: "When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined."
  },
  "1-3-3-sensory-characteristics": {
    name: "1.3.3 Sensory Characteristics",
    level: "Level A",
    description: "Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, size, visual location, orientation, or sound."
  },
  "1-3-4-orientation": {
    name: "1.3.4 Orientation",
    level: "Level AA (Added in 2.1)",
    description: "Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential."
  },
  "1-3-5-identify-input-purpose": {
    name: "1.3.5 Identify Input Purpose",
    level: "Level AA (Added in 2.1)",
    description: "The purpose of each input field collecting information about the user can be programmatically determined when:"
  },
  "1-3-6-identify-purpose": {
    name: "1.3.6 Identify Purpose",
    level: "Level AAA (Added in 2.1)",
    description: "In content implemented using markup languages, the purpose of user interface components, icons, and regions can be programmatically determined."
  },
  "1-4-1-use-of-color": {
    name: "1.4.1 Use of Color",
    level: "Level A",
    description: "Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element."
  },
  "1-4-2-audio-control": {
    name: "1.4.2 Audio Control",
    level: "Level A",
    description: "If any audio on a web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.",
    details: `
      <ul>
        <li><strong>Note:</strong> Any content that does not meet this success criterion can interfere with a user's ability to use the whole page. All content on the web page must meet this criterion. See Conformance Requirement 5: Non-Interference.</li>
      </ul>
    `
  },
  "1-4-3-contrast-minimum": {
    name: "1.4.3 Contrast (Minimum)",
    level: "Level AA",
    description: "The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:",
    details: `
      <ul>
        <li><strong>Large Text:</strong> Large-scale text and images of large-scale text have a contrast ratio of at least 3:1.</li>
        <li><strong>Incidental:</strong> Text or images of text that are part of an inactive user interface component, pure decoration, not visible to anyone, or part of a picture with significant other visual content, have no contrast requirement.</li>
        <li><strong>Logotypes:</strong> Text that is part of a logo or brand name has no contrast requirement.</li>
      </ul>
    `
  },
  "1-4-4-resize-text": {
    name: "1.4.4 Resize Text",
    level: "Level AA",
    description: "Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality."
  },
  "1-4-5-images-of-text": {
    name: "1.4.5 Images of Text",
    level: "Level AA",
    description: "If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the following:",
    details: `
      <ul>
        <li><strong>Customizable:</strong> The image of text can be visually customized to the user's requirements.</li>
        <li><strong>Essential:</strong> A particular presentation of text is essential to the information being conveyed.</li>
        <li><strong>Note:</strong> Logotypes (text that is part of a logo or brand name) are considered essential.</li>
      </ul>
    `
  },
  "1-4-6-contrast-enhanced": {
    name: "1.4.6 Contrast (Enhanced)",
    level: "Level AAA",
    description: "The visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the following:",
    details: `
      <ul>
        <li><strong>Large Text:</strong> Large-scale text and images of large-scale text have a contrast ratio of at least 4.5:1.</li>
        <li><strong>Incidental:</strong> Text or images of text that are part of an inactive user interface component, pure decoration, not visible to anyone, or part of a picture with significant other visual content, have no contrast requirement.</li>
        <li><strong>Logotypes:</strong> Text that is part of a logo or brand name has no contrast requirement.</li>
      </ul>
    `
  },
  "1-4-7-low-or-no-background-audio": {
    name: "1.4.7 Low or No Background Audio",
    level: "Level AAA",
    description: "For prerecorded audio-only content that contains primarily speech in the foreground, at least one of the following is true:",
    details: `
      <ul>
        <li><strong>No Background:</strong> The audio does not contain background sounds.</li>
        <li><strong>Turn Off:</strong> The background sounds can be turned off.</li>
        <li><strong>20 dB:</strong> The background sounds are at least 20 decibels lower than the foreground speech content, except for occasional sounds that last only one or two seconds.</li>
        <li><strong>Note:</strong> Background sound that meets this requirement will be approximately four times quieter than the foreground speech content.</li>
      </ul>
    `
  },
  "1-4-8-visual-presentation": {
    name: "1.4.8 Visual Presentation",
    level: "Level AAA",
    description: "For the visual presentation of blocks of text, a mechanism is available to achieve the following:",
    details: `
      <ul>
        <li>Foreground and background colors can be selected by the user.</li>
        <li>Width is no more than 80 characters or glyphs (40 if CJK).</li>
        <li>Text is not justified (aligned to both the left and the right margins).</li>
        <li>Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.</li>
        <li>Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window.</li>
        <li><strong>Note 1:</strong> Content is not required to use these values. The requirement is that a mechanism is available for users to change these presentation aspects. The mechanism can be provided by the browser or other user agent. Content is not required to provide the mechanism.</li>
        <li><strong>Note 2:</strong> Writing systems for some languages use different presentation aspects to improve readability and legibility. If a presentation aspect in this success criterion is not used in a writing system, content in that writing system does not need to use that presentation setting and can conform without it. Authors are encouraged to follow guidance for improving readability and legibility of text in their writing system.</li>
      </ul>
    `
  },
  "1-4-9-images-of-text-no-exception": {
    name: "1.4.9 Images of Text (No Exception)",
    level: "Level AAA",
    description: "Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.",
    details: `
      <ul>
        <li><strong>Note:</strong> Logotypes (text that is part of a logo or brand name) are considered essential.</li>
      </ul>
    `
  },
  "1-4-10-reflow": {
    name: "1.4.10 Reflow",
    level: "Level AA (Added in 2.1)",
    description: "Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:",
    details: `
      <ul>
        <li><strong>Vertical scrolling</strong> content at a width equivalent to 320 CSS pixels;</li>
        <li><strong>Horizontal scrolling</strong> content at a height equivalent to 256 CSS pixels.</li>
        <li><strong>Note 1:</strong> 320 CSS pixels is equivalent to a starting viewport width of 1280 CSS pixels wide at 400% zoom. For web content designed to scroll horizontally, 256 CSS pixels is equivalent to a starting viewport height of 1024 CSS pixels at 400% zoom.</li>
        <li><strong>Note 2:</strong> Examples of content which requires two-dimensional layout are images required for understanding (such as maps and diagrams), video, games, presentations, data tables (not individual cells), and interfaces where it is necessary to keep toolbars in view while manipulating content. It is acceptable to provide two-dimensional scrolling for such parts of the content.</li>
      </ul>
    `
  },
  "1-4-11-non-text-contrast": {
    name: "1.4.11 Non-text Contrast",
    level: "Level AA (Added in 2.1)",
    description: "The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s):",
    details: `
      <ul>
        <li><strong>User Interface Components:</strong> Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author.</li>
        <li><strong>Graphical Objects:</strong> Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.</li>
      </ul>
    `
  },
  "1-4-12-text-spacing": {
    name: "1.4.12 Text Spacing",
    level: "Level AA (Added in 2.1)",
    description: "In content implemented using markup languages that support the following text style properties, no loss of content or functionality occurs by setting all of the following and by changing no other style property:",
    details: `
      <ul>
        <li>Line height (line spacing) to at least 1.5 times the font size;</li>
        <li>Spacing following paragraphs to at least 2 times the font size;</li>
        <li>Letter spacing (tracking) to at least 0.12 times the font size;</li>
        <li>Word spacing to at least 0.16 times the font size.</li>
        <li><strong>Exception:</strong> Human languages and scripts that do not make use of one or more of these text style properties in written text can conform using only the properties that exist for that combination of language and script.</li>
        <li><strong>Note 1:</strong> Content is not required to use these text spacing values. The requirement is to ensure that when a user overrides the authored text spacing, content or functionality is not lost.</li>
        <li><strong>Note 2:</strong> Writing systems for some languages use different text spacing settings, such as paragraph start indent. Authors are encouraged to follow locally available guidance for improving readability and legibility of text in their writing system.</li>
      </ul>
    `
  },
  "1-4-13-content-on-hover-or-focus": {
    name: "1.4.13 Content on Hover or Focus",
    level: "Level AA (Added in 2.1)",
    description: "Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:",
    details: `
      <ul>
        <li><strong>Dismissible:</strong> A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content.</li>
        <li><strong>Hoverable:</strong> If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing.</li>
        <li><strong>Persistent:</strong> The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.</li>
        <li><strong>Exception:</strong> The visual presentation of the additional content is controlled by the user agent and is not modified by the author.</li>
        <li><strong>Note 1:</strong> Examples of additional content controlled by the user agent include browser tooltips created through use of the HTML title attribute [HTML].</li>
        <li><strong>Note 2:</strong> Custom tooltips, sub-menus, and other nonmodal popups that display on hover and focus are examples of additional content covered by this criterion.</li>
        <li><strong>Note 3:</strong> This criterion applies to content that appears in addition to the triggering component itself. Since hidden components that are made visible on keyboard focus (such as links used to skip to another part of a page) do not present additional content they are not covered by this criterion.</li>
      </ul>
    `
  },
  "2-1-1-keyboard": {
    name: "2.1.1 Keyboard",
    level: "Level A",
    description: "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.",
    details: `
      <ul>
        <li><strong>Note 1:</strong> This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not.</li>
        <li><strong>Note 2:</strong> This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.</li>
      </ul>
    `
  },
  "2-1-2-no-keyboard-trap": {
    name: "2.1.2 No Keyboard Trap",
    level: "Level A",
    description: "If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.",
    details: `
      <ul>
        <li><strong>Note:</strong> Any content that does not meet this success criterion can interfere with a user's ability to use the whole page. All content on the web page must meet this criterion. See Conformance Requirement 5: Non-Interference.</li>
      </ul>
    `
  },
  "2-1-3-keyboard-no-exception": {
    name: "2.1.3 Keyboard (No Exception)",
    level: "Level AAA",
    description: "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes."
  },
  "2-1-4-character-key-shortcuts": {
    name: "2.1.4 Character Key Shortcuts",
    level: "Level A (Added in 2.1)",
    description: "If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:",
    details: `
      <ul>
        <li><strong>Turn off:</strong> A mechanism is available to turn the shortcut off.</li>
        <li><strong>Remap:</strong> A mechanism is available to remap the shortcut to include one or more non-printable keyboard keys (e.g., Ctrl, Alt).</li>
        <li><strong>Active only on focus:</strong> The keyboard shortcut for a user interface component is only active when that component has focus.</li>
      </ul>
    `
  },
  "2-2-1-timing-adjustable": {
    name: "2.2.1 Timing Adjustable",
    level: "Level A",
    description: "For each time limit that is set by the content, at least one of the following is true:",
    details: `
      <ul>
        <li><strong>Turn off:</strong> The user is allowed to turn off the time limit before encountering it.</li>
        <li><strong>Adjust:</strong> The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting.</li>
        <li><strong>Extend:</strong> The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action, and the user is allowed to extend the time limit at least ten times.</li>
        <li><strong>Real-time Exception:</strong> The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible.</li>
        <li><strong>Essential Exception:</strong> The time limit is essential and extending it would invalidate the activity.</li>
        <li><strong>20 Hour Exception:</strong> The time limit is longer than 20 hours.</li>
        <li><strong>Note:</strong> This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with Success Criterion 3.2.1, which puts limits on changes of content or context as a result of user action.</li>
      </ul>
    `
  },
  "2-2-2-pause-stop-hide": {
    name: "2.2.2 Pause, Stop, Hide",
    level: "Level A",
    description: "For moving, blinking, scrolling, or auto-updating information, all of the following are true:",
    details: `
      <ul>
        <li><strong>Moving, blinking, scrolling:</strong> For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential.</li>
        <li><strong>Auto-updating:</strong> For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.</li>
        <li><strong>Note 1:</strong> For requirements related to flickering or flashing content, refer to Guideline 2.3.</li>
        <li><strong>Note 2:</strong> Any content that does not meet this success criterion can interfere with a user's ability to use the whole page. All content on the web page must meet this criterion. See Conformance Requirement 5: Non-Interference.</li>
        <li><strong>Note 3:</strong> Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.</li>
        <li><strong>Note 4:</strong> An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.</li>
      </ul>
    `
  },
  "2-2-3-no-timing": {
    name: "2.2.3 No Timing",
    level: "Level AAA",
    description: "Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events."
  },
  "2-2-4-interruptions": {
    name: "2.2.4 Interruptions",
    level: "Level AAA",
    description: "Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency."
  },
  "2-2-5-re-authenticating": {
    name: "2.2.5 Re-authenticating",
    level: "Level AAA",
    description: "When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating."
  },
  "2-2-6-timeouts": {
    name: "2.2.6 Timeouts",
    level: "Level AAA (Added in 2.1)",
    description: "Users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.",
    details: `
      <ul>
        <li><strong>Note:</strong> Privacy regulations may require explicit user consent before user identification has been authenticated and before user data is preserved. In cases where the user is a minor, explicit consent may not be solicited in most jurisdictions, countries or regions. Consultation with privacy professionals and legal counsel is advised when considering data preservation as an approach to satisfy this success criterion.</li>
      </ul>
    `
  },
  "2-3-1-three-flashes-or-below-threshold": {
    name: "2.3.1 Three Flashes or Below Threshold",
    level: "Level A",
    description: "Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.",
    details: `
      <ul>
        <li><strong>Note:</strong> Any content that does not meet this success criterion can interfere with a user's ability to use the whole page. All content on the web page must meet this criterion. See Conformance Requirement 5: Non-Interference.</li>
      </ul>
    `
  },
  "2-3-2-three-flashes": {
    name: "2.3.2 Three Flashes",
    level: "Level AAA",
    description: "Web pages do not contain anything that flashes more than three times in any one second period."
  },
  "2-3-3-animation-from-interactions": {
    name: "2.3.3 Animation from Interactions",
    level: "Level AAA (Added in 2.1)",
    description: "Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed."
  },
  "2-4-1-bypass-blocks": {
    name: "2.4.1 Bypass Blocks",
    level: "Level A",
    description: "A mechanism is available to bypass blocks of content that are repeated on multiple web pages."
  },
  "2-4-2-page-titled": {
    name: "2.4.2 Page Titled",
    level: "Level A",
    description: "Web pages have titles that describe topic or purpose."
  },
  "2-4-3-focus-order": {
    name: "2.4.3 Focus Order",
    level: "Level A",
    description: "If a web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability."
  },
  "2-4-4-link-purpose-in-context": {
    name: "2.4.4 Link Purpose (In Context)",
    level: "Level A",
    description: "The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general."
  },
  "2-4-5-multiple-ways": {
    name: "2.4.5 Multiple Ways",
    level: "Level AA",
    description: "More than one way is available to locate a web page within a set of web pages except where the web page is the result of, or a step in, a process."
  },
  "2-4-6-headings-and-labels": {
    name: "2.4.6 Headings and Labels",
    level: "Level AA",
    description: "Headings and labels describe topic or purpose."
  },
  "2-4-7-focus-visible": {
    name: "2.4.7 Focus Visible",
    level: "Level AA",
    description: "Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible."
  },
  "2-4-8-location": {
    name: "2.4.8 Location",
    level: "Level AAA",
    description: "Information about the user's location within a set of web pages is available."
  },
  "2-4-9-link-purpose-link-only": {
    name: "2.4.9 Link Purpose (Link Only)",
    level: "Level AAA",
    description: "A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general."
  },
  "2-4-10-section-headings": {
    name: "2.4.10 Section Headings",
    level: "Level AAA",
    description: "Section headings are used to organize the content.",
    details: `
      <ul>
        <li><strong>Note 1:</strong> "Heading" is used in its general sense and includes titles and other ways to add a heading to different types of content.</li>
        <li><strong>Note 2:</strong> This success criterion covers sections within writing, not user interface components. User interface components are covered under Success Criterion 4.1.2.</li>
      </ul>
    `
  },
  "2-5-1-pointer-gestures": {
    name: "2.5.1 Pointer Gestures",
    level: "Level A (Added in 2.1)",
    description: "All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.",
    details: `
      <ul>
        <li><strong>Note:</strong> This requirement applies to web content that interprets pointer actions (i.e., this does not apply to actions that are required to operate the user agent or assistive technology).</li>
      </ul>
    `
  },
  "2-5-2-pointer-cancellation": {
    name: "2.5.2 Pointer Cancellation",
    level: "Level A (Added in 2.1)",
    description: "For functionality that can be operated using a single pointer, at least one of the following is true:",
    details: `
      <ul>
        <li><strong>No Down-Event:</strong> The down-event of the pointer is not used to execute any part of the function.</li>
        <li><strong>Abort or Undo:</strong> Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion.</li>
        <li><strong>Up Reversal:</strong> The up-event reverses any outcome of the preceding down-event.</li>
        <li><strong>Essential:</strong> Completing the function on the down-event is essential.</li>
        <li><strong>Note 1:</strong> Functions that emulate a keyboard or numeric keypad key press are considered essential.</li>
        <li><strong>Note 2:</strong> This requirement applies to web content that interprets pointer actions (i.e., this does not apply to actions that are required to operate the user agent or assistive technology).</li>
      </ul>
    `
  },
  "2-5-3-label-in-name": {
    name: "2.5.3 Label in Name",
    level: "Level A (Added in 2.1)",
    description: "For user interface components with labels that include text or images of text, the name contains the text that is presented visually.",
    details: `
      <ul>
        <li><strong>Note:</strong> A best practice is to have the text of the label at the start of the name.</li>
      </ul>
    `
  },
  "2-5-4-motion-actuation": {
    name: "2.5.4 Motion Actuation",
    level: "Level A (Added in 2.1)",
    description: "Functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when:",
    details: `
      <ul>
        <li><strong>Supported Interface:</strong> The motion is used to operate functionality through an accessibility supported interface.</li>
        <li><strong>Essential:</strong> The motion is essential for the function and doing so would invalidate the activity.</li>
      </ul>
    `
  },
  "2-5-5-target-size-enhanced": {
    name: "2.5.5 Target Size (Enhanced)",
    level: "Level AAA (Added in 2.1)",
    description: "The size of the target for pointer inputs is at least 44 by 44 CSS pixels except when:",
    details: `
      <ul>
        <li><strong>Equivalent:</strong> The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels.</li>
        <li><strong>Inline:</strong> The target is in a sentence or block of text.</li>
        <li><strong>User Agent Control:</strong> The size of the target is determined by the user agent and is not modified by the author.</li>
        <li><strong>Essential:</strong> A particular presentation of the target is essential to the information being conveyed.</li>
      </ul>
    `
  },
  "2-5-6-concurrent-input-mechanisms": {
    name: "2.5.6 Concurrent Input Mechanisms",
    level: "Level AAA (Added in 2.1)",
    description: "Web content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings."
  },
  "3-1-1-language-of-page": {
    name: "3.1.1 Language of Page",
    level: "Level A",
    description: "The default human language of each web page can be programmatically determined."
  },
  "3-1-2-language-of-parts": {
    name: "3.1.2 Language of Parts",
    level: "Level AA",
    description: "The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text."
  },
  "3-1-3-unusual-words": {
    name: "3.1.3 Unusual Words",
    level: "Level AAA",
    description: "A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon."
  },
  "3-1-4-abbreviations": {
    name: "3.1.4 Abbreviations",
    level: "Level AAA",
    description: "A mechanism for identifying the expanded form or meaning of abbreviations is available."
  },
  "3-1-5-reading-level": {
    name: "3.1.5 Reading Level",
    level: "Level AAA",
    description: "When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available."
  },
  "3-1-6-pronunciation": {
    name: "3.1.6 Pronunciation",
    level: "Level AAA",
    description: "A mechanism is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation."
  },
  "3-2-1-on-focus": {
    name: "3.2.1 On Focus",
    level: "Level A",
    description: "When any user interface component receives focus, it does not initiate a change of context."
  },
  "3-2-2-on-input": {
    name: "3.2.2 On Input",
    level: "Level A",
    description: "Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component."
  },
  "3-2-3-consistent-navigation": {
    name: "3.2.3 Consistent Navigation",
    level: "Level AA",
    description: "Navigational mechanisms that are repeated on multiple web pages within a set of web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user."
  },
  "3-2-4-consistent-identification": {
    name: "3.2.4 Consistent Identification",
    level: "Level AA",
    description: "Components that have the same functionality within a set of web pages are identified consistently."
  },
  "3-2-5-change-on-request": {
    name: "3.2.5 Change on Request",
    level: "Level AAA",
    description: "Changes of context are initiated only by user request or a mechanism is available to turn off such changes."
  },
  "3-3-1-error-identification": {
    name: "3.3.1 Error Identification",
    level: "Level A",
    description: "If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text."
  },
  "3-3-2-labels-or-instructions": {
    name: "3.3.2 Labels or Instructions",
    level: "Level A",
    description: "Labels or instructions are provided when content requires user input."
  },
  "3-3-3-error-suggestion": {
    name: "3.3.3 Error Suggestion",
    level: "Level AA",
    description: "If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content."
  },
  "3-3-4-error-prevention-legal-financial-data": {
    name: "3.3.4 Error Prevention (Legal, Financial, Data)",
    level: "Level AA",
    description: "For web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:",
    details: `
      <ul>
        <li><strong>Reversible:</strong> Submissions are reversible (e.g., users can undo or cancel the transaction).</li>
        <li><strong>Checked:</strong> Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.</li>
        <li><strong>Confirmed:</strong> A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.</li>
      </ul>
    `
  },
  "3-3-5-help": {
    name: "3.3.5 Help",
    level: "Level AAA",
    description: "Context-sensitive help is available."
  },
  "3-3-6-error-prevention-all": {
    name: "3.3.6 Error Prevention (All)",
    level: "Level AAA",
    description: "For web pages that require the user to submit information, at least one of the following is true:",
    details: `
      <ul>
        <li><strong>Reversible:</strong> Submissions are reversible (e.g., users can undo or cancel the transaction).</li>
        <li><strong>Checked:</strong> Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.</li>
        <li><strong>Confirmed:</strong> A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.</li>
      </ul>
    `
  },
  "4-1-1-parsing": {
    name: "4.1.1 Parsing",
    level: "Level A",
    description: "In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.",
    details: `
      <ul>
        <li><strong>Note 1:</strong> This success criterion should be considered as always satisfied for any content using HTML or XML.</li>
        <li><strong>Note 2:</strong> The HTML Living Standard requires browsers to handle incomplete tags, incorrect nesting, duplicate attributes, and non-unique IDs consistently. Issues caused by these should be reported under other relevant criteria (e.g., missing roles or duplicate IDs affecting accessibility).</li>
      </ul>
    `
  },
  "4-1-2-name-role-value": {
    name: "4.1.2 Name, Role, Value",
    level: "Level A",
    description: "For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.",
    details: `
      <ul>
        <li><strong>Note:</strong> Standard HTML controls meet this criterion when used according to specification. Custom components must be coded to expose name, role, and value programmatically.</li>
      </ul>
    `
  },
  "4-1-3-status-messages": {
    name: "4.1.3 Status Messages",
    level: "Level AA (Added in 2.1)",
    description: "In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus."
  }
};