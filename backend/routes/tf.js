const express = require('express');
const router = express.Router();
const tf = require('../templates/tf.js')
const fs = require('fs');


router.get('/', function (req, res, next) {
  res.send('hello')
})

router.get('/postAllData', function (req, res, next) {
  console.log("start GET-----------------------------------")
  console.log(req)
  console.log("start GET------------------------------------")
})

router.post('/postAllData', function (req, res, next) {
  console.log("start POST-----------------------------------")
  console.log(req.body)
  console.log("end POST------------------------------------")

  const vpc = req.body.vpc;
  const subnet = req.body.subnet;

  res.send('post Hello')
})

router.get('/consoleTestFile', function (req, res, next) {
  const vpcName = "test"
  const vpcCidrBlock = "10.0.0.0./16"
  const subnetCidrBlock = "10.0.0.0./16"
  const availabilityZone = "ap-northeast-1a"
  const publicIpOnLaunch = "true"


  console.log(tf.vpc(vpcName, vpcCidrBlock));
  console.log(tf.subnet(vpcName, subnetCidrBlock, availabilityZone, publicIpOnLaunch));
  res.send('success testMakeFile api ')
})


router.post('/consoleTf', function (req, res, next) {
  console.log("start POST-----------------------------------")
  const [
    vpcName,
    vpcCidrBlock,
    subnetCidrBlock,
    availabilityZone,
    publicIpOnLaunch
  ] = [
      req.body.vpc.name,
      req.body.vpc.cidrBlock,
      req.body.subnet.cidrBlock,
      req.body.availabilityZone,
      req.body.isPublicIp
    ]

  console.log(tf.vpc(vpcName, vpcCidrBlock));
  console.log(tf.subnet(vpcName, subnetCidrBlock, availabilityZone, publicIpOnLaunch));

  console.log("end POST------------------------------------")
  

  res.send('success consoleTf api ')
})


router.post('/MakeTestFile', function (req, res, next) {
  // const vpcName = "test"
  // const vpcCidrBlock = "10.0.0.0./16"
  // const subnetCidrBlock = "10.0.0.0./16"
  // const availabilityZone = "ap-northeast-1a"
  // const publicIpOnLaunch = "true"

  const [
    vpcName,
    vpcCidrBlock,
    subnetCidrBlock,
    availabilityZone,
    publicIpOnLaunch
  ] = [
      req.body.vpc.name,
      req.body.vpc.cidrBlock,
      req.body.subnet.cidrBlock,
      req.body.availabilityZone,
      req.body.isPublicIp
    ]


  // console.log(tf.vpc(vpcName, vpcCidrBlock));
  // console.log(tf.subnet(vpcName, subnetCidrBlock, availabilityZone, publicIpOnLaunch));

  const vpc = tf.vpc(vpcName, vpcCidrBlock);
  const subnet = tf.subnet(vpcName, subnetCidrBlock, availabilityZone, publicIpOnLaunch);

  const terraformFile = vpc + subnet
  console.log(terraformFile)

  fs.writeFile('tf.txt', terraformFile, function (err) {
    if (err) { throw err; }
    console.log('tf.txtが作成されました');
});

  
  res.send('success MakeTestFile api ')
})

module.exports = router;
