# Leadership Image and Bio Naming

The Leadership section auto-matches each board member to files in this folder.

## How matching works

- The system uses the member's name from `src/data/leadership.ts`.
- It converts that name to a key by:
  - lowercasing
  - removing spaces and punctuation
- Example: `Ashley Granger` -> `ashleygranger`

## Required file naming

Use the same base filename for image + bio text:

- Image: `<key>.jpg` (or `.jpeg`, `.png`, `.webp`, `.avif`)
- Bio: `<key>.txt`

Example:

- `ashleygranger.JPG`
- `ashleygranger.txt`

## Optional override

If you need a different filename, set `assetKey` on that member in `src/data/leadership.ts`.

Example:

```ts
{
  name: 'Jane Doe',
  role: 'Secretary',
  bio: '',
  assetKey: 'janedoe2026'
}
```

Then use:

- `janedoe2026.jpg`
- `janedoe2026.txt`

## Notes

- If no image is found, the default avatar icon is shown.
- If no text file is found, the member card has no hover bio panel.
- If both `bio` in `leadership.ts` and `<key>.txt` exist, the `bio` value in `leadership.ts` is used first.
