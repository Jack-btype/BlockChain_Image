pragma solidity ^0.5.0;

contract BuyPainting {
  
  struct buyer {
    string name;
  }

  struct Image {
    bytes32 name;
    address owner;
    bool IsOnSell;
  }

  Image[] public paintings;
  uint8 public paintingsSzie = 0;

  function uploadPainting(bytes32 UpName) public {
    require(UpName != "");
    paintings.push(Image({
      name: UpName,
      owner: msg.sender,
      IsOnSell: false
    }));
  }

  function getPaintings(uint8 i) public view returns(address) {

  }
}
