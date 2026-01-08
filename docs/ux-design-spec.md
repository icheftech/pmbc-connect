# PMBC Connect - UX Design Specifications

## Design Philosophy

**Mission**: Compete at mega-church scale while maintaining personal discipleship depth.

**Core Principles**:
- Netflix-style video experience for content engagement
- Low-friction user journeys (visitors → members → disciples)
- Ministry-first recommendations (spiritual growth over engagement metrics)
- Every feature maps to: Salvation, Discipleship, Care, Community, or Stewardship

## Color Palette

### Primary Colors
- **Navy Blue**: #0C2746 (primary background, headers)
- **Gold/Orange**: #F6A729 (CTAs, accents, badges)
- **White**: #FFFFFF (text, cards)

### Secondary Colors
- **Dark Navy**: #081A2E (footer, secondary backgrounds)
- **Light Gray**: #F5F5F5 (section dividers)
- **Success Green**: #28A745
- **Prayer Purple**: #9B59B6

## Typography

- **Headings**: System Font Stack (San Francisco/Segoe UI)
  - H1: 32px/bold
  - H2: 24px/semibold
  - H3: 20px/semibold
- **Body**: 16px/regular, line-height 1.5
- **Small**: 14px/regular

## Navigation Structure

### Top Navigation (All Pages)
1. Home
2. Watch
3. Calendar
4. Events
5. Give
6. Care
7. Pathways
8. Profile

## Page Specifications

### 1. Home Dashboard

**Layout**:
- Header (sticky)
- Hero section with featured sermon/announcement
- Quick action cards (4 tiles)
  - Watch Latest
  - Upcoming Events
  - Prayer Request
  - Give
- "This Week at PMBC" section
- Footer

**Components**:
- Hero banner: 100% width, 400px height
- Action cards: 4-column grid (responsive to 2-col mobile)
- Card styling: white background, subtle shadow, 16px padding

### 2. Watch (Netflix-Style)

**Hero Banner**:
- Large featured video (Continue Watching or This Week's Message)
- Title overlay (white text, dark gradient background)
- CTAs: "Resume Watching" (primary) + "More Info" (secondary)
- Progress bar (gold, 4px height)

**Content Rows** (Horizontal Scrolling):
1. Continue Watching
2. This Week at PMBC
3. Current Series
4. Recommended for Your Walk
5. Bible Studies
6. Watch by Topic
7. Watch by Scripture

**Video Card Design**:
- Thumbnail: 16:9 aspect ratio
- Duration badge: top-right, black background
- Series badge: top-left, gold background
- Hover state: scale 1.05, show play icon
- Title + Pastor + Views + Date below thumbnail

**Video Detail Page**:
- Full-width video player
- Title + Series info
- Key Scriptures (clickable)
- Pastor Notes (expandable)
- Next Step CTAs:
  - Request Prayer
  - Talk to a Pastor
  - Join This Study
  - Give to This Ministry

### 3. Calendar

**Dual View**:
- Church Events (public)
- Personal Calendar (member-only)

**Filter by Category**:
- All Events (gold button)
- Worship (purple dot)
- Bible Study (blue dot)
- Youth (green dot)
- Community (orange dot)
- Prayer (pink dot)

**Calendar View**:
- Monthly grid
- Event dots on dates
- Selected date shows event details in sidebar

### 4. Care Section

**Pastoral Scheduling**:
- Meeting type selection (dropdown)
  - General Meeting
  - Counseling
  - Prayer
  - New Member
- Staff selection (auto-suggest based on meeting type)
- Date/time picker
- Intake form (reason for meeting)

**Prayer Request Form**:
- Public/Private toggle
- Urgent flag checkbox
- Category selection
- Text area (500 char limit)
- Contact preference

### 5. Plan a Visit

**Form Fields**:
1. Full Name
2. Email
3. Phone
4. Service date selection
5. First-time visitor? (yes/no)
6. Childcare needed? (yes/no with ages)
7. How can we help? (optional text)

**Confirmation**:
- Email confirmation sent
- Add to calendar button
- Welcome video embedded

### 6. Discipleship Pathways

**4 Pathways**:
1. New Believer
2. New Member
3. Growing Disciple
4. Leadership/Ministry Worker

**Pathway Card**:
- Icon + Title
- Progress indicator
- Current week's action
- "Continue" button

**Inside Pathway**:
- Weekly lessons (video + text)
- Action items (checkboxes)
- Discussion prompts
- "Talk to a Leader" button
- Small group link

### 7. Events Page

**Event Card**:
- Featured image (3:2 ratio)
- Date badge (overlay, top-left)
- Title + Location + Time
- RSVP button
- Share button

**Event Detail**:
- Full description
- Location map
- RSVP form
- Add to calendar
- Related events

### 8. Giving Page

**One-Time vs Recurring**:
- Tab selector at top
- Amount buttons ($25, $50, $100, Custom)
- Fund selection (General, Building, Missions)
- Payment method (Pushpay integration)

**Impact Section**:
- Monthly giving report
- Visual progress bars
- Testimonies

### 9. Member Profile

**Sections**:
- Personal Info
- Ministry Involvement
- Giving History
- Pathway Progress
- Personal Calendar
- Watched Videos
- Prayer Requests

## Mobile Considerations

- Hamburger menu for navigation
- Bottom tab bar (Home, Watch, Events, Profile)
- Swipeable cards
- Larger touch targets (48px minimum)
- Simplified forms (fewer fields per screen)

## Footer

**4 Columns**:
1. PMBC Connect
   - Tagline
   - Social icons
2. Quick Links
3. Service Times
4. Contact Us

**Copyright**: Centered, 14px, gray text

## Interaction Patterns

- **Buttons**: 16px padding, 8px border-radius, hover state darkens 10%
- **Cards**: 16px padding, 8px border-radius, subtle shadow
- **Modals**: Centered, max-width 600px, overlay blur
- **Toasts**: Top-right, 4s duration, slide-in animation

## Accessibility

- WCAG 2.1 AA compliance
- Minimum contrast ratio 4.5:1
- Keyboard navigation support
- Screen reader friendly
- Alt text for all images

## Performance Targets

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: > 90

---

*Last Updated: January 8, 2026*
