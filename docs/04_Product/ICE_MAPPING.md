# ICE Attribute Mapping

## Overview

EngPath currently uses the ICE (Institution of Civil Engineers) competency attributes as its evidence framework. When AI analyses a project reflection, it maps evidence to these attributes. Users can review and override the mapping.

---

## Current ICE Attributes

The ICE Chartership framework uses a set of competency attributes that candidates must demonstrate. These are used in EngPath as the categories for evidence items.

> The exact list of attributes is sourced from the ICE guidance documents. Verify the current list against the ICE website — frameworks can be updated.

Common ICE attributes include (to verify against current ICE guidance):
- Engineering Knowledge
- Design, Innovation and Problem Solving
- Technical and Commercial Leadership
- Professional Commitment
- (others as defined by ICE)

---

## How Mapping Works

1. The user writes a project reflection describing their role, actions, and outcomes.
2. The AI analyses the reflection and assigns each evidence item to one or more ICE attributes.
3. The user reviews the mapping and can:
   - Accept the AI's suggested attribute
   - Change the attribute to a different one
   - Reject the evidence item entirely

---

## Design Intent — Do Not Hard-Code to ICE

ICE is the first framework EngPath supports because it is the target user's primary need. However, the product should not be permanently locked to ICE.

**Design principles:**
- Treat ICE attributes as one instance of a `competency_framework` concept
- Avoid embedding ICE attribute names as hard-coded strings in logic where possible
- When building new features (export, readiness score, gap analysis), design them to work with any attribute set

This leaves open the possibility of supporting other frameworks (ICStructE, CIBSE, CIOB, etc.) in future without a full rewrite.

---

## Future

- Allow users to select their target framework on signup or in settings
- Store frameworks in a database table rather than hard-coded in the frontend
- Support multiple frameworks simultaneously for multi-pathway engineers
