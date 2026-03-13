// ─────────────────────────────────────────────────────────────
//  EXECUTIVE BOARD
//  To update the board, simply edit the array below.
//
//  Each member has:
//    name  — Full name
//    role  — Title / position
//    bio   — One-line description of duties
//    image — (optional) Path to headshot in /public/images/
//            If omitted, a default user-icon placeholder is shown.
//
//  To add a member: copy an existing block and fill in the fields.
//  To remove a member: delete or comment out the block.
//  The order here controls the order on the website.
// ─────────────────────────────────────────────────────────────

export interface LeadershipMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export const executiveBoard: LeadershipMember[] = [
  {
    name: 'Eric Gudiel',
    role: 'President',
    bio: '',
  },
  {
    name: 'Samantha Flores',
    role: 'Co-Vice President',
    bio: '',
  },
  {
    name: 'Ashley Granger',
    role: 'Co-Vice President',
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
