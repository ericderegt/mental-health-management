import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { Button, Header, Icon } from 'react-native-elements';

import { GlobalStyles, GlobalColors } from '../themes/global-styles';

import ResultsList from '../components/results/results-list';

const anxietyList = [
  {
    name: 'Breathing Meditation',
    id: 5,
    text: '',
    category_id: 3,
    duration: 5,
    bgColor: '#81C784',
    uri: 'http://marc.ucla.edu/mpeg/01_Breathing_Meditation.mp3',
  },
  {
    name: 'How to cope with anxiety',
    id: 2,
    category_id: 2,
    text: 'Anxiety is one of most prevalent mental health disorders, with 1 out of 14 people around the world being likely affected. Leading up to conditions such as depression, increased risk for suicide, disability and requirement of high health services, very few people who often need treatment actually receive it. In her talk “How to cope with anxiety”, Olivia Remes of the University of Cambridge will share her vision on anxiety and will unravel ways to treat and manage this health disorder',
    bgColor: '#2E7D32',
    uri: 'https://www.youtube.com/watch?v=WWloIAQpMcQ',
    duration: 4,
  },
  {
    name: 'Remember events',
    id: 13,
    category_id: 1,
    bgColor: '#2E7D32',
    text: 'Remember events from your past that were pleasant, fun, or exciting. Try to remember as many details as possible about these happy memories. What were you doing? Who were you with? What happened?',
    duration: 3,
  },
  {
    name: 'Understanding Anxiety Disorders',
    id: 45,
    category_id: 4,
    bgColor: '#81C784',
    text: 'Many of us worry from time to time. We fret over finances, feel anxious about job interviews, or get nervous about social gatherings. These feelings can be normal or even helpful. They may give us a boost of energy or help us focus. But for people with anxiety disorders, they can be overwhelming.\n\nAnxiety disorders affect nearly 1 in 5 American adults each year. People with these disorders have feelings of fear and uncertainty that interfere with everyday activities and last for 6 months or more. Anxiety disorders can also raise your risk for other medical problems such as heart disease, diabetes, substance abuse, and depression.\n\nThe good news is that most anxiety disorders get better with therapy. The course of treatment depends on the type of anxiety disorder. Medications, psychotherapy (\"talk therapy\"), or a combination of both can usually relieve troubling symptoms.\n\n\"Anxiety disorders are one of the most treatable mental health problems we see,\" says Dr. Daniel Pine, an NIH neuroscientist and psychiatrist. \"Still, for reasons we don\'t fully understand, most people who have these problems don\'t get the treatments that could really help them.\"\n\nOne of the most common types of anxiety disorder is social anxiety disorder, or social phobia. It affects both women and men equally—a total of about 15 million U.S. adults. Without treatment, social phobia can last for years or even a lifetime. People with social phobia may worry for days or weeks before a social event. They\'re often embarrassed, self-conscious, and afraid of being judged. They find it hard to talk to others. They may blush, sweat, tremble, or feel sick to their stomach when around other people.\n\nOther common types of anxiety disorders include generalized anxiety disorder, which affects nearly 7 million American adults, and panic disorder, which affects about 6 million. Both are twice as common in women as in men.\n\nPeople with generalized anxiety disorder worry endlessly over everyday issues—like health, money, or family problems—even if they realize there\'s little cause for concern. They startle easily, can\'t relax, and can\'t concentrate. They find it hard to fall asleep or stay asleep. They may get headaches, muscle aches, or unexplained pains. Symptoms often get worse during times of stress.\n\nPeople with panic disorder have sudden, repeated bouts of fear—called panic attacks—that last several minutes or more. During a panic attack, they may feel that they can\'t breathe or that they\'re having a heart attack. They may fear loss of control or feel a sense of unreality. Not everyone who has panic attacks will develop panic disorder. But if the attacks recur without warning, creating fear of having another attack at any time, then it\'s likely panic disorder.\n\nAnxiety disorders tend to run in families. But researchers aren\'t certain why some family members develop these conditions while others don\'t. No specific genes have been found to actually cause an anxiety disorder. \"Many different factors—including genes, stress, and the environment—have small effects that add up in complex ways to affect a person\'s risk for these disorders,\" Pine says.\n\n\"Many kids with anxiety disorders will outgrow their conditions. But most anxiety problems we see in adults started during their childhood,\" Pine adds.\n\n\"Anxiety disorders are among the most common psychiatric disorders in children, with an estimated 1 in 3 suffering anxiety at some point during childhood or adolescence,\" says Dr. Susan Whitfield-Gabrieli, a brain imaging expert at the Massachusetts Institute of Technology. \"About half of diagnosable mental health disorders start by age 14, so there\'s a lot of interest in uncovering the factors that might influence the brain by those early teen years.\"\n\nWhitfield-Gabrieli is launching an NIH-funded study to create detailed MRI images of the brains of more than 200 teens, ages 14-15, with and without anxiety or depression. The scientists will then assess what brain structures and activities might be linked to these conditions. The study is part of NIH\'s Human Connectome Project, in which research teams across the country are studying the complex brain connections that affect health and disease.\n\nWhitfield-Gabrieli and colleagues have shown that analysis of brain connections might help predict which adults with social phobia will likely respond to cognitive behavioral therapy (CBT). CBT is a type of talk therapy known to be effective for people with anxiety disorders. It helps them change their thinking patterns and how they react to anxiety-provoking situations. But it doesn\'t work for everyone.\n\nOf 38 adults with social phobia, those who responded best after 3 months of CBT had similar patterns of brain connections. This brain analysis led to major improvement, compared to a clinician\'s assessment alone, in predicting treatment response. Larger studies will be needed to confirm the benefits of the approach.\n\n\"Ultimately, we hope that brain imaging will help us predict clinical outcomes and actually tailor the treatment to each individual—to know whether they\'ll respond best to psychotherapy or to certain medications,\" Whitfield-Gabrieli says.\n\nOther researchers are focusing on our emotions and our ability to adjust them. \"We want to understand not only how emotions can help us but also how they can create difficulties if they\'re of the wrong intensity or the wrong type for a particular situation,\" says Dr. James Gross, a clinical psychologist at Stanford University.\n\nWe all use different strategies to adjust our emotions, often without thinking about it. If something makes you angry, you may try to tamp down your emotion to avoid making a scene. If something annoys you, you might try to ignore it, modify it, or entirely avoid it.\n\nBut these strategies can turn harmful over time. For instance, people with social phobia might decide to avoid attending a professional conference so they can keep their anxiety in check. That makes them lose opportunities at work and miss chances to meet people and make friends.\n\nGross and others are examining the differences between how people with and without anxiety disorders regulate their emotions. \"We\'re finding that CBT is helpful in part because it teaches people to more effectively use emotion regulation strategies,\" Gross says. \"They then become more competent in their ability to use these strategies in their everyday lives.\"\n\n\"It\'s important to be aware that many different kinds of treatments are available, and people with anxiety disorders tend to have very good responses to those treatments,\" Pine adds. The best way to start is often by talking with your physician. If you\'re a parent, talk with your child\'s pediatrician. \"These health professionals are generally prepared to help identify such problems and help patients get the appropriate care they need,\" Pine says.',
    duration: 5,
  },
]

const happyList = [
  {
    name: 'Observe the natural world',
    id: 12,
    category_id: 1,
    bgColor: '#2E7D32',
    text: 'Look outside at the natural world around you. Observe the flowers, trees, sky, and landscape as closely as you can. Observe any animals that are around. Listen to the sounds they make. Or if you live in a city without much nature around you, either do your best to observe what you can or close your eyes and imagine a scene you\'ve observed in the past.',
    duration: 2,
  },
  {
    name: 'Loving Kindness Meditation',
    id: 35,
    text: '',
    category_id: 3,
    duration: 9,
    bgColor: '#81C784',
    uri: 'http://marc.ucla.edu/mpeg/05_Loving_Kindness_Meditation.mp3',
  },
  {
    name: 'What makes a good life?',
    id: 26,
    category_id: 2,
    text: '',
    bgColor: '#81C784',
    uri: 'https://www.youtube.com/watch?v=8KkKuTCFvzI',
    duration: 13,
  },
  {
    name: 'True happiness isn’t about being happy all the time',
    id: 44,
    category_id: 4,
    bgColor: '#2E7D32',
    text: 'Over the past two decades, the positive psychology movement has brightened up psychological research with its science of happiness, human potential and flourishing. It argues that psychologists should not only investigate mental illness but also what makes life worth living.\n\nThe founding father of positive psychology, Martin Seligman, describes happiness as experiencing frequent positive emotions, such as joy, excitement and contentment, combined with deeper feelings of meaning and purpose. It implies a positive mindset in the present and an optimistic outlook for the future. Importantly, happiness experts have argued that happiness is not a stable, unchangeable trait but something flexible that we can work on and ultimately strive towards.\n\nI have been running happiness workshops for the last four years based on the evidence from the above field of psychology. The workshops are fun and I have earned a reputation as \"Mrs Happy\", but the last thing I would want anyone to believe is that I am happy all the time. Striving for a happy life is one thing, but striving to be happy all the time is unrealistic.\n\nRecent research  indicates that psychological flexibility is the key to greater happiness and well-being. For example, being open to emotional experiences and the ability to tolerate periods of discomfort can allow us to move towards a richer, more meaningful existence.\n\nStudies have demonstrated that the way we respond to the circumstances of our lives has more influence on our happiness than the events themselves. Experiencing stress, sadness and anxiety in the short term doesn\'t mean we can\'t be happy in the long term.\n\nTwo paths to happiness\nPhilosophically speaking there are two paths to feeling happy, the hedonistic and the eudaimonic. Hedonists take the view that in order to live a happy life we must maximise pleasure and avoid pain. This view is about satisfying human appetites and desires, but it is often short lived.\n\nIn contrast, the eudaimonic approach takes the long view. It argues that we should live authentically and for the greater good. We should pursue meaning and potential through kindness, justice, honesty and courage.\n\nIf we see happiness in the hedonistic sense, then we have to continue to seek out new pleasures and experiences in order to \"top up\" our happiness. We will also try to minimise unpleasant and painful feelings in order to keep our mood high.\n\nIf we take the eudaimonic approach, however, we strive for meaning, using our strengths to contribute to something greater than ourselves. This may involve unpleasant experiences and emotions at times, but often leads to deeper levels of joy and contentment. So leading a happy life is not about avoiding hard times; it is about being able to respond to adversity in a way that allows you to grow from the experience.\n\nGrowing from adversity\nResearch shows that experiencing adversity can actually be good for us, depending on how we respond to it. Tolerating distress can make us more resilient and lead us to take action in our lives, such as changing jobs or overcoming hardship.\n\nIn studies of people facing trauma, many describe their experience as a catalyst for profound change and transformation, leading to a phenomenon known as \"post-traumatic growth\". Often when people have faced difficulty, illness or loss, they describe their lives as happier and more meaningful as a result.\n\nUnlike feeling happy, which is a transient state, leading a happier life is about individual growth through finding meaning. It is about accepting our humanity with all its ups and downs, enjoying the positive emotions, and harnessing painful feelings in order to reach our full potential.',
    duration: 10,
  },
]

class Results extends Component {
  constructor (props) {
    super(props)
  };

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;

    return (
      <ScrollView style={styles.container}>
        <View style={{height: 10}}/>
        <View style={{padding: 10, marginBottom: 5}}>
          <Text style={[GlobalStyles.text, styles.headerText]}>For You</Text>
        </View>
        <View>
          <View style={{ flex: 1}}>
            <ResultsList data={params.data == 'Anxious'? anxietyList : happyList} navigation={this.props.navigation}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.backgroundColor,
  },
  text: {
    color: '#fff',
  },
  headerText: {
    color: GlobalColors.blackColor,
  },
});

export default Results;
