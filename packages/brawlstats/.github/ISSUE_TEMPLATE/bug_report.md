---
name: Bug report
about: Report a bug caught in the package
title: ''
labels: bug
assignees: ''
 - type: input
    attributes:
      label: Overview
      description: A summary of the bug
    validations:
      required: true
  - type: textarea
    attributes:
      label: Re-production
      description: >
         The process of re-producing the bug
    validations:
      required: true
  - type: textarea
    attributes:
      label: Minimal code for bug re-production
      description: >
        A short piece of code that showcases the bug
      render: typescript
    validations:
      required: true
  - type: textarea
    attributes:
      label: Expected output
      description: >
        What were the expected results of the code?
    validations:
      required: true
  - type: textarea
    attributes:
      label: Actual output
      description: >
        What was the actual result?
    validations:
      required: true
  - type: textarea
    attributes:
      label: Environment
      description: >
        The environment the code was run in. Please include the following information:

        Service (Desktop, repl.it, ...), OS (Windows 10), Node.js and Project Version (Node 16.2, brawlstats 1.0.1)
    validations:
      required: true
  - type: checkboxes
    attributes:
      label: Checklist
      description: >
        Let's ensure your report is proper!
      options:
        - label: I have searched the open issues for duplicates.
          required: true
        - label: I have shown the entire traceback, if possible.
          required: true
        - label: I have provided a sufficient amount of code to re-produce the bug or mine, if none.
          required: true
  - type: textarea
    attributes:
      label: Additional information
      description: Is there anything else you would like to say? Please do so here!
---