import {test} from 'node:test';
import assert from 'node:assert/strict';
import {lightkeeperState} from '../src/motion/lightkeeper-story';

test('the keeper restores the machine before the village answers and can retrace the journey',()=>{
 const start=lightkeeperState(0),middle=lightkeeperState(.5),finish=lightkeeperState(1);
 assert.equal(start.open,0);assert.equal(start.village,0);assert.equal(start.returnHome,0);
 assert.equal(middle.descend,1);assert.ok(middle.spark>0);assert.equal(middle.transmit,0);assert.equal(middle.village,0);
 assert.equal(finish.close,1);assert.equal(finish.village,1);assert.equal(finish.reply,1);assert.equal(finish.returnHome,1);
 assert.deepEqual(lightkeeperState(0),start);
 let chapter=-1;
 for(let i=0;i<=100;i++){const s=lightkeeperState(i/100);assert.ok(s.chapter>=chapter);chapter=s.chapter;for(const [key,value] of Object.entries(s)){assert.ok(Number.isFinite(value),key);if(key!=='chapter')assert.ok(value>=0&&value<=1,key);}}
 assert.deepEqual(lightkeeperState(-1),start);assert.deepEqual(lightkeeperState(3),finish);
});
