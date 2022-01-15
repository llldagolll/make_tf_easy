const express = require('express');
const router = express.Router();
const tf = require('../templates/tf.js')

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

router.get('/testMakeFile', function (req, res, next) {
  const vpcName = "test"
  const vpcCidrBlock = "10.0.0.0./16"
  const subnetCidrBlock = "10.0.0.0./16"
  const availabilityZone = "ap-northeast-1a"
  const publicIpOnLaunch = "true"


  console.log(tf.vpc(vpcName, vpcCidrBlock));
  console.log(tf.subnet(vpcName, subnetCidrBlock, availabilityZone, publicIpOnLaunch));
  res.send('success testMakeFile api ')
})


router.post('/makeTf', function (req, res, next) {
  console.log("start POST-----------------------------------")
  const [
    vpcName,
    vpcCidrBlock,
    subnetCidrBlock,
    availabilityZone,
    publicIpOnLaunch
  ] = [req.body.vpc.name, req.body.vpc.cidrBlock, req.body.subnet.cidrBlock, req.body.availabilityZone, req.body.isPublicIp]

  console.log(tf.vpc(vpcName, vpcCidrBlock));
  console.log(tf.subnet(vpcName, subnetCidrBlock, availabilityZone, publicIpOnLaunch));

  console.log("end POST------------------------------------")
  

  res.send('success MakeTf api ')
})




module.exports = router;
