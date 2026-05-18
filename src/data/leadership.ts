// ─────────────────────────────────────────────────────────────
//  EXECUTIVE BOARD
//  To update the board, simply edit the array below.
//
//  Each member has:
//    name  — Full name
//    role  — Title / position
//    bio      — Optional override text (if blank, src/images/<key>.txt is used)
//    assetKey — Optional file key override for image and bio lookup in src/images/
//    image    — Optional direct image URL/path override
//
//  To add a member: copy an existing block and fill in the fields.
//  To remove a member: delete or comment out the block.
//  The order here controls the order on the website.
// ─────────────────────────────────────────────────────────────

export interface LeadershipMember {
  name: string;
  role: string;
  bio: string;
  assetKey?: string;
  image?: string;
}

export const executiveBoard: LeadershipMember[] = [
  {
    name: 'Dr. Tino Posillico',
    role: 'Faculty Advisor',
    bio: '',
  },
  {
    name: 'Eric Gudiel',
    role: 'President',
    bio: '',
  },
  {
    name: 'Samantha Flores',
    role: 'Co Vice President',
    bio: '',
  },
  {
    name: 'Ashley Granger',
    role: 'Co Vice President',
    bio: '',
  },
  {
    name: 'Nicolette Carbo',
    role: 'Secretary',
    bio: '',
  },
  {
    name: 'Ayomidire Bolaji',
    role: 'Treasurer',
    bio: '',
  },
];
