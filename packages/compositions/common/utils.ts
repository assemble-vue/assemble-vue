export default function isInMac(): boolean {
    return /macintosh|mac os x/i.test(navigator.userAgent);
}
