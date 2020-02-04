interface EncryptGeneral<T> {
    <T>(key: T, value: T): T;
}

function getEncryption<T>(key: T, value: T): T { return key }

var sha1: EncryptGeneral<string> = getEncryption;
console.log(sha1('今夜月色很美', ''));


interface Encrypt {
    (key: string, value: string): string;
}

var md5: Encrypt = (key, value) => key + value;

console.log(md5('今夜月色很美', '我爱你'));