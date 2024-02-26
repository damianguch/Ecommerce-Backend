export default {
  port: 1337,
  dbUrl: 'mongodb://localhost:27017/REST-API',
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  publicKey: `-----BEGIN PUBLIC KEY-----
  ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC6te0qc7CB0y1lWu4p5D0j/H9SYwf6c22U9hrbY+Nu0KWHUO9eHT68MwWlRTbxAATTrR2hxmUGQ+AGKTRgMbZnn7/B4lrjd1Gj7qf4iYtjYRce9tEgYx76qvN2TEQp/r7xs1BkhkMbarHYzCsXwqgEZAPCH6tAkR3m26J4MY+ZeyLkfK9gGEqLNpZvSu1007H5oRWy0e3Z2pV8Nk+wS059lkugXduV4s2Gz8/gUs3wy2qnb7qvMd7BzgN+xz+K1wa/iHkBEq/SBiI5fzV0zIhvJ0bhBQPqJYmUC972zxJLRGG/Ai525TE4kjMVdlDFYLZOAkyTwoZ7bX3IEqIJWVjHlgclmGgr1vvuqiLKcX7xDy4Zlfm4M4TBOBJPI7q5GI9+dY4S5PFnkv66huCSBMm3W1q+Z94QiIocHNKjO/Mciik9Hj08/JdXFRkguBCV6wJWg2llPxyB/OS0zaGngL8NMVBI8XnZKsRJXBhVfuXx0J6khWp9u7PFAZ0SwpDS8Zs= damian@Guch
  -----END PUBLIC KEY-----`,
  privateKey: `
  -----BEGIN OPENSSH PRIVATE KEY-----
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
8WUiFWNvaeHdsAAAALZGFtaWFuQEd1Y2g=
-----END OPENSSH PRIVATE KEY-----`
};
